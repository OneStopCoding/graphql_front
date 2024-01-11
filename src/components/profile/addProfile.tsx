import * as yup from "yup";
import ImageValidation from "../../utility/file/imageValidation";
import {useCreateProfileMutation} from "../../generated/graphql";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {FormikProvider, useFormik} from "formik";
import ImageUrls from "../../utility/file/imageUrls";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StyledForm from "../common/layout/form";
import {Alert, Button, TextField} from "@mui/material";
import Loader from "../common/Loader";
import IsExistingProfile from "./profileExist";
import {CitiesSelect, CountrySelect, ProvinceSelect} from "../../utility/locations/select";
import {CityValidation, ProvinceValidation} from "../../utility/locations/validations";
import { v4 as uuidv4 } from "uuid";



const CreateProfile = () => {
    const existingProfile = IsExistingProfile()
    const [createProfile, {data, loading, error}] = useCreateProfileMutation({
        fetchPolicy: "network-only"
    })
    const validationSchema = yup.object().shape({
        firstname: yup.string(),
        lastname: yup.string(),
        bio: yup.string(),
        profilePic: ImageValidation.required("We like to know who you are. Upload a profile-pic"),
        images: ImageValidation,
        city: CityValidation(),
        provence: ProvinceValidation(),
        country: yup.string().oneOf(["België", "Nederland", "Luxembourg"], "Enkel landen van de Benelux zijn momenteel toegelaten!"),
        website: yup.string().url(),
        github: yup.string().url(),
        twitter: yup.string().url(),
        instagram: yup.string().url(),
        fb: yup.string().url()
    })


    const navigate = useNavigate()
    const successUrl = '/profile'

    useEffect(() => {
        if (data) {
            navigate(successUrl, {replace: true})
        }
    }, [data, navigate])
    const id = existingProfile?.id || uuidv4()
    const firstname = existingProfile?.firstname || ""
    const lastname = existingProfile?.lastname || ""
    const bio = existingProfile?.bio || ""
    const oldProfilePic = existingProfile?.profilePic || ""
    const oldImages = existingProfile?.images || []
    const city = existingProfile?.location?.city?.name || ""
    const provence = existingProfile?.location?.provence?.name || ""
    const country = existingProfile?.location?.country?.name || ""
    const website = existingProfile?.socials?.website || ""
    const github = existingProfile?.socials?.github || ""
    const twitter = existingProfile?.socials?.twitter || ""
    const instagram = existingProfile?.socials?.instagram || ""
    const fb = existingProfile?.socials?.fb || ""


    const profile = useFormik({
        initialValues: {
            firstname: firstname,
            lastname: lastname,
            bio: bio,
            profilePic: oldProfilePic,
            images: oldImages,
            city: city,
            provence: provence,
            country: country,
            website: website,
            github: github,
            twitter: twitter,
            instagram: instagram,
            fb: fb
        },
        validationSchema,
        onSubmit: async (values) => {
            const images = values.images.length > 0 ? await ImageUrls(values.images) : []
            const profilePic = values.profilePic.length > 0 ? await ImageUrls(Array(values.profilePic[0])) : []
console.log("id: ", id)
            await createProfile({
                variables: {
                    id: id,
                    firstname: values.firstname === "" ? firstname : values.firstname,
                    lastname: values.lastname === "" ? lastname: values.lastname,
                    profilePic: profilePic[0] === null || profilePic[0] === "" ? oldProfilePic : profilePic[0],
                    images: images[0] === null ? oldImages : images,
                    location: [values.city === "" ? city : values.city ,
                        values.provence === "" ? provence : values.provence
                        , values.country === "" ? country : values.country],
                    socials: [
                        values.website === "" ? website : values.website,
                        values.github === "" ? github : values.github,
                        values.twitter === "" ? twitter : values.twitter,
                        values.instagram === "" ? instagram : values.instagram,
                        values.fb === "" ? fb : values.fb
                    ],
                    bio: values.bio === "" ? bio: values.bio,
                }
            })
            console.log(data)
        }
    })
const countries = CountrySelect(profile.values.country, profile.handleChange, profile.handleBlur)
    const provinces = ProvinceSelect(profile.values.provence, profile.values.country, profile.handleChange, profile.handleBlur)
    const cities = CitiesSelect(profile.values.provence, profile.values.country, profile.values.city, profile.handleChange, profile.handleBlur)
    return (
        <FormikProvider value={profile}>
            <Box sx={{textAlign: 'center', marginTop: '2em'}}>
                <Typography variant='h6'>Fill out your Profile</Typography>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <StyledForm onSubmit={profile.handleSubmit} method="post">
                        <TextField id='firstname'
                                   name="firstname"
                                   placeholder={firstname || "Enter your firstname"}
                                   label={firstname || "Firstname"}
                                   value={profile.values.firstname}
                                   onChange={profile.handleChange}
                                   onBlur={profile.handleBlur}
                                   variant={'outlined'}
                                   error={profile.touched.firstname && Boolean(profile.errors.firstname)}
                                   helperText={profile.touched.firstname && profile.errors.firstname}
                                   sx={{marginTop: "10px"}}/>
                        <TextField id='lastname'
                                   type="text"
                                   name="lastname"
                                   placeholder="Enter your lastname"
                                   label={lastname || "Lastname"}
                                   value={profile.values.lastname}
                                   onChange={profile.handleChange}
                                   onBlur={profile.handleBlur}
                                   variant={'outlined'}
                                   error={profile.touched.lastname && Boolean(profile.errors.lastname)}
                                   helperText={profile.touched.lastname && profile.errors.lastname}
                                   sx={{marginTop: "10px"}}/>
                        <TextField id='bio'
                                   type="text"
                                   name="bio"
                                   placeholder="Enter your Bio"
                                   label={bio || "Bio"}
                                   multiline={true}
                                   rows={6}
                                   value={profile.values.bio}
                                   onChange={profile.handleChange}
                                   onBlur={profile.handleBlur}
                                   variant={'outlined'}
                                   error={profile.touched.bio && Boolean(profile.errors.bio)}
                                   helperText={profile.touched.bio && profile.errors.bio}
                                   sx={{marginTop: "10px"}}/>
                        <label style={{marginTop:"5%"}}> Upload Profile Picture</label>
                        <input
                            name="image"
                            type="file"
                            onChange={e => profile.setFieldValue("profilePic", e.target.files && e.target.files)}
                        />
                        <label style={{marginTop:"5%", marginBottom:"2%"}}> Upload Extra Images</label>
                        <input
                            name="image"
                            type="file"
                            multiple
                            style={{marginBottom: "2%"}}
                            onChange={e => profile.setFieldValue("images", e.target.files && e.target.files)}
                        />
                        {
                            profile.errors.images && <p style={{color: "red"}}>{profile.errors.images}</p>
                        }

                        {countries}
                        <TextField id='country'
                                   type="text"
                                   name="country"
                                   placeholder="Enter your country"
                                   label={country || "Country"}
                                   value={profile.values.country}
                                   onChange={profile.handleChange}
                                   onBlur={profile.handleBlur}
                                   variant={'outlined'}
                                   error={profile.touched.country && Boolean(profile.errors.country)}
                                   helperText={profile.touched.country && profile.errors.country}
                                   sx={{marginTop: "10px"}}/>

                        {provinces}
                        <TextField id='provence'
                                   type="text"
                                   name="provence"
                                   placeholder="Enter your province/state"
                                   label={provence || "Province/State"}
                                   value={profile.values.provence}
                                   onChange={profile.handleChange}
                                   onBlur={profile.handleBlur}
                                   variant={'outlined'}
                                   error={profile.touched.provence && Boolean(profile.errors.provence)}
                                   helperText={profile.touched.provence && profile.errors.provence}
                                   sx={{marginTop: "10px"}}/>

                        {cities}
                        <TextField id='city'
                                   type="text"
                                   name="city"
                                   placeholder="Enter the city you're at"
                                   label={city || "City"}
                                   value={profile.values.city}
                                   onChange={profile.handleChange}
                                   onBlur={profile.handleBlur}
                                   variant={'outlined'}
                                   error={profile.touched.city && Boolean(profile.errors.city)}
                                   helperText={profile.touched.city && profile.errors.city}
                                   sx={{marginTop: "10px"}}/>
                        <TextField id='website'
                                   type="text"
                                   name="website"
                                   placeholder={"Enter your website"}
                                   label={website !== "" || !website.includes("null") ? website : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                               viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                               strokeLinecap="round" strokeLinejoin="round"
                                               className="feather feather-globe mr-2 icon-inline">
                                       <circle cx="12" cy="12" r="10"></circle>
                                       <line x1="2" y1="12" x2="22" y2="12"></line>
                                       <path
                                           d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                   </svg>}
                                   value={profile.values.website}
                                   onChange={profile.handleChange}
                                   onBlur={profile.handleBlur}
                                   variant={'outlined'}
                                   error={profile.touched.website && Boolean(profile.errors.website)}
                                   helperText={profile.touched.bio && profile.errors.bio}
                                   sx={{marginTop: "10px"}}/>
                        <TextField id='github'
                                   type="text"
                                   name="github"
                                   placeholder="Enter your github"
                                   label={github !== "" || !github.includes("null") ? github : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                               viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                               strokeLinecap="round" strokeLinejoin="round"
                                               className="feather feather-github mr-2 icon-inline">
                                       <path
                                           d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                   </svg>}
                                   value={profile.values.github}
                                   onChange={profile.handleChange}
                                   onBlur={profile.handleBlur}
                                   variant={'outlined'}
                                   error={profile.touched.github && Boolean(profile.errors.github)}
                                   helperText={profile.touched.github && profile.errors.github}
                                   sx={{marginTop: "10px"}}/>
                        <TextField id='twitter'
                                   type="text"
                                   name="twitter"
                                   placeholder="Enter your Twitter"
                                   label={twitter !== "" || !twitter.includes("null") ? twitter : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                               viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                               strokeLinecap="round" strokeLinejoin="round"
                                               className="feather feather-twitter mr-2 icon-inline text-info">
                                       <path
                                           d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                   </svg>}
                                   value={profile.values.twitter}
                                   onChange={profile.handleChange}
                                   onBlur={profile.handleBlur}
                                   variant={'outlined'}
                                   error={profile.touched.twitter && Boolean(profile.errors.twitter)}
                                   helperText={profile.touched.twitter && profile.errors.twitter}
                                   sx={{marginTop: "10px"}}/>
                        <TextField id='instagram'
                                   type="text"
                                   name="instagram"
                                   placeholder="Enter your Instagram"
                                   label={instagram !== "" || !twitter.includes("null") ? instagram : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                               viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                               strokeLinecap="round" strokeLinejoin="round"
                                               className="feather feather-instagram mr-2 icon-inline text-danger">
                                       <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                       <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                   </svg>}
                                   value={profile.values.instagram}
                                   onChange={profile.handleChange}
                                   onBlur={profile.handleBlur}
                                   variant={'outlined'}
                                   error={profile.touched.instagram && Boolean(profile.errors.instagram)}
                                   helperText={profile.touched.instagram && profile.errors.instagram}
                                   sx={{marginTop: "10px"}}/>
                        <TextField id='fb'
                                   type="text"
                                   name="fb"
                                   placeholder="Enter your Facebook"
                                   label={fb !== "" || !fb.includes("null") ? fb : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                               viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                               strokeLinecap="round" strokeLinejoin="round"
                                               className="feather feather-facebook mr-2 icon-inline text-primary">
                                       <path
                                           d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                   </svg>}
                                   value={profile.values.fb}
                                   onChange={profile.handleChange}
                                   onBlur={profile.handleBlur}
                                   variant={'outlined'}
                                   error={profile.touched.fb && Boolean(profile.errors.fb)}
                                   helperText={profile.touched.fb && profile.errors.fb}
                                   sx={{marginTop: "10px"}}/>

                        <Button variant="contained" type="submit" sx={{marginTop: "10px"}}>Create Profile</Button>

                        {error && <Alert severity="error">{error.message}, Please try again!</Alert>}
                    </StyledForm>
                    <Loader open={loading}/>
                </Box>
            </Box>
        </FormikProvider>
    )
}
export default CreateProfile