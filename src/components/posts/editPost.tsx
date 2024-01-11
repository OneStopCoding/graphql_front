import {Post, useAddPostMutation, useDeletePostMutation, usePostsByUserQuery} from "../../generated/graphql";
import {useAuth} from "../common/AuthProvider";
import React,{useEffect, useState} from "react";
import {FormikProvider, useFormik} from "formik";
import ImageUrls from "../../utility/file/imageUrls";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StyledForm from "../common/layout/form";
import {Alert, Button, TextField} from "@mui/material";
import ReactQuill from "react-quill";
import Loader from "../common/Loader";
import {validationSchema} from "./addPost";
import * as yup from "yup";
import {useParams} from "react-router-dom";


export const MyPost = ()=> {
    const username = useAuth()?.user?.username.toString() || ""
    const {data, error, loading} = usePostsByUserQuery({
        variables: {
            author: username
        }
    })
    return data?.postsForUser as Post[]
}
const PostSelect = (my_posts: string | number | readonly string[] | undefined, handleChange: React.ChangeEventHandler<HTMLSelectElement> | undefined, handleBlur: React.FocusEventHandler<HTMLSelectElement> | undefined) =>{
    const posts: Post[] = MyPost()
    const validationSchema = yup.object().shape({
        title: yup.string(),
    })
   // const {data, loading, error} = usePo
    const titleForm = useFormik({
        initialValues: {
            title: "",
        },
        validationSchema,
        onSubmit: async (values) => {


        }
    })
            const [title, setTitle] = useState("")
    const select = [ <option value="" label="Which post do you wish to edit?">
        Select a provence{" "}
    </option>]
   posts.map(post => select.push(<option value={post.title} label={post.title}>
       {" "}
       {post.title}
   </option>))
    return (
        <div>
            <label htmlFor="my_posts" style={{display: "block"}}>
                Country
            </label>
            <select
                name="title"
                value={title}
                onChange={title => {

                }}
                onBlur={handleBlur}
                style={{display: "block"}}
            >
                {select}
            </select>

        </div>
    )
}
export const DeletePost= ()=>{
    const id = useParams().id || ""
    const [deleted, {data}] = useDeletePostMutation({
        fetchPolicy: "network-only",
        variables: {
            id: id
        }
    })
    deleted().then(() => window.location.assign("/posts"))
    return (
        <></>
    )
}

const EditPost = () => {
    const [convertedText, setConvertedText] = useState("");


    const [addPost, {data, loading, error}] = useAddPostMutation({
        fetchPolicy: "network-only"
    })

    useEffect(() => {
        if (data) {
          window.location.assign("/posts")
        }
    }, [data])


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
export default EditPost