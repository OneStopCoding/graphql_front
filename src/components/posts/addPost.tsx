import {useAddPostMutation} from "../../generated/graphql";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useFormik} from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Alert, Button, TextareaAutosize, TextField} from "@mui/material";
import Loader from "../common/Loader";
import {styled} from "@mui/material/styles";
import * as yup from "yup";
import {TextFieldsOutlined} from "@mui/icons-material";

const StyledForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
})

const validationSchema = yup.object({
    title: yup.string().required("Please enter a title"),
    body: yup.string().required('Please enter a valid text')
})

const AddPost = () =>{
    const [addPost, {data, loading, error}] = useAddPostMutation({
        fetchPolicy: "network-only"
    })

    const navigate = useNavigate()

    const successUrl = '/posts'

    useEffect(() => {
        if (data){
            navigate(successUrl, {replace: true})
        }
    }, [data])


    const postForm = useFormik({
        initialValues: {
            title: "",
            body: ""
        },
        validationSchema,
        onSubmit: (values) =>{
            addPost({
                variables: {
                    title: values.title,
                    body: values.body,
                }
            })
        }
    })
    return (
        <Box sx={{textAlign: 'center', marginTop: '2em'}}>
            <Typography variant='h6'>Add a post</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <StyledForm onSubmit={postForm.handleSubmit}>
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
                               multiline ={true}
                               rows={6}
                               value={postForm.values.body}
                               onChange={postForm.handleChange}
                               onBlur={postForm.handleBlur}
                               variant={'outlined'}
                               error={postForm.touched.body && Boolean(postForm.errors.body)}
                               helperText={postForm.touched.body && postForm.errors.body}
                               sx={{marginTop: "10px"}}/>
                    <Button variant="contained" type="submit"  sx={{marginTop: "10px"}}>Add Post</Button>

                    {error && <Alert severity="error">{error.message}, Please try again!</Alert>}
                </StyledForm>
                <Loader open={loading} />
            </Box>
        </Box>
    )
}

export default AddPost;