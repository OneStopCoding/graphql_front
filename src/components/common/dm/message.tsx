import {useNavigate, useParams} from "react-router-dom";
import {
    useSendDmMutation
} from "../../../generated/graphql";
import Loader from "../Loader";
import {useEffect} from "react";
import {FormikProvider, useFormik} from "formik";
import ImageUrls from "../../../utility/file/imageUrls";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StyledForm from "../layout/form";
import {Alert, Button, TextField} from "@mui/material";
import * as yup from "yup";
import ImageValidation from "../../../utility/file/imageValidation";

const SendDM = () => {
    const validationSchema = yup.object().shape({
        title: yup.string().required("Please enter a title"),
        text: yup.string().required('Please enter a valid text'),
        images: ImageValidation
    })
    
    const param = useParams().username || ""
    
    const [sendDM,{data, loading, error}] = useSendDmMutation({
        fetchPolicy: 'network-only'
    })
    
    const navigate = useNavigate()
    const successUrl = '/search/'+param

    useEffect(() => {
        if (data) {
            navigate(successUrl, {replace: true})
        }
    }, [data, navigate, successUrl])


    const postForm = useFormik({
        initialValues: {
            title: "",
            text: "",
            images: []
        },
        validationSchema,
        onSubmit: async (values) => {
            ImageUrls(values.images).then(images =>
                sendDM({
                    variables: {
                            title: values.title,
                            receiver: param,
                            text: values.text,
                            images: images
                    }
                }))
        }
    })
    return (
        <FormikProvider value={postForm}>
            <Box sx={{textAlign: 'center', marginTop: '2em'}}>
                <Typography variant='h6'>Add a post</Typography>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <StyledForm onSubmit={postForm.handleSubmit} method="post">
                        <TextField id='title'
                                   name="title"
                                   placeholder="Enter a title"
                                   label="Title"
                                   value={postForm.values.title}
                                   onChange={postForm.handleChange}
                                   onBlur={postForm.handleBlur}
                                   variant={'outlined'}
                                   error={postForm.touched.title && Boolean(postForm.errors.title)}
                                   helperText={postForm.touched.title && postForm.errors.title}
                                   sx={{marginTop: "10px"}}/>
                        <TextField id='text'
                                   type="text"
                                   name="text"
                                   placeholder="Enter Text"
                                   label="Text"
                                   multiline={true}
                                   rows={6}
                                   value={postForm.values.text}
                                   onChange={postForm.handleChange}
                                   onBlur={postForm.handleBlur}
                                   variant={'outlined'}
                                   error={postForm.touched.text && Boolean(postForm.errors.text)}
                                   helperText={postForm.touched.text && postForm.errors.text}
                                   sx={{marginTop: "10px"}}/>
                        <label> Upload File</label>
                        <input
                            name="image"
                            type="file"
                            multiple
                            onChange={e => postForm.setFieldValue("images", e.target.files && e.target.files)}
                        />
                        {
                            postForm.errors.images && <p style={{color: "red"}}>{postForm.errors.images}</p>
                        }
                        <Button variant="contained" type="submit" sx={{marginTop: "10px"}}>Add Post</Button>

                        {error && <Alert severity="error">{error.message}, Please try again!</Alert>}
                    </StyledForm>
                    <Loader open={loading}/>
                </Box>
            </Box>
        </FormikProvider>
    )
}

export default SendDM