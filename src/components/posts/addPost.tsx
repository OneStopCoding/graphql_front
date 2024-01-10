import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {FormikProvider, useFormik} from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Alert, Button, TextField} from "@mui/material";
import Loader from "../common/Loader";
import * as yup from "yup";
import {useAddPostMutation} from "../../generated/graphql";
import ImageUrls from "../../utility/file/imageUrls";
import ImageValidation from "../../utility/file/imageValidation";
import StyledForm from "../common/layout/form";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


const validationSchema = yup.object().shape({
    title: yup.string().required("Please enter a title"),
    images: ImageValidation
})

const AddPost = () => {
    const [convertedText, setConvertedText] = useState("");


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
            images: []
        },
        validationSchema,
        onSubmit: async (values) => {
            ImageUrls(values.images).then(images =>
                addPost({
                    variables: {
                        title: values.title,
                        body: convertedText,
                        images: images,
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
                                   sx={{marginTop: "10px", marginBottom: "15%"}}/>
                        <div>
                            <ReactQuill
                                id="convertedText"
                                theme='snow'
                                value={convertedText}
                                onChange={setConvertedText}
                                style={{marginBottom: "15%"}}

                            />
                        </div>
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