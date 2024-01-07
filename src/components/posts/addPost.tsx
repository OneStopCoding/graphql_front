import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {FormikProvider, useFormik} from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Alert, Button, TextField} from "@mui/material";
import Loader from "../common/Loader";
import * as yup from "yup";
import {useAddPostMutation} from "../../generated/graphql";
import ImageUrls from "../../utility/imageUrls";
import ImageValidation from "../../utility/imageValidation";
import StyledForm from "../common/layout/form";



const validationSchema = yup.object().shape({
    title: yup.string().required("Please enter a title"),
    body: yup.string().required('Please enter a valid text'),
    images: ImageValidation
})

const AddPost = () => {
    const [addPost, {data, loading, error}] = useAddPostMutation({
        fetchPolicy: "network-only"
    })
    const navigate = useNavigate()
    const successUrl = '/posts'

    useEffect(() => {
        if (data) {
            navigate(successUrl, {replace: true})
        }
    }, [data, navigate])


    const postForm = useFormik({
        initialValues: {
            title: "",
            body: "",
            images: []
        },
        validationSchema,
        onSubmit: async (values) => {
         ImageUrls(values.images).then(images =>
                addPost({
                    variables: {
                        title: values.title,
                        body: values.body,
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
                        <TextField id='body'
                                   type="text"
                                   name="body"
                                   placeholder="Enter Text"
                                   label="Text"
                                   multiline={true}
                                   rows={6}
                                   value={postForm.values.body}
                                   onChange={postForm.handleChange}
                                   onBlur={postForm.handleBlur}
                                   variant={'outlined'}
                                   error={postForm.touched.body && Boolean(postForm.errors.body)}
                                   helperText={postForm.touched.body && postForm.errors.body}
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

export default AddPost;