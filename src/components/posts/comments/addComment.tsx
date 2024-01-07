import {FC} from "react";
import * as yup from 'yup';
import {useFormik} from "formik";
import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";

interface Props{
    onSubmit:  (values: string) => void;
}

const validationSchema = yup.object({
    text: yup.string().required('PLease enter a comment!')
})
const AddComment: FC<Props> = ({onSubmit}) => {
    const CommentForm = useFormik({
        initialValues: {
            text: ''
        },
        validationSchema,
        onSubmit: values => {
           onSubmit(values.text)
    },
    })
    return (
        <Box>
        <form style={{display: 'flex', marginLeft: '15px'}} onSubmit={CommentForm.handleSubmit}>
            <TextField id='text' name='text'
                       placeholder='Enter Comment' label='Comment'
                       sx={{marginTop: "10px"}} variant='outlined'
                       value={CommentForm.values.text}
                       onChange={CommentForm.handleChange}
                       onBlur={CommentForm.handleBlur}
                       error={CommentForm.touched.text && Boolean(CommentForm.errors.text)}
                       helperText={CommentForm.touched.text && CommentForm.errors.text}
                       />
            <Button type="submit" sx={{marginTop: '20px', marginLeft: '10px'}}>Add Comment</Button>
        </form>
    </Box>
    )
}

export default AddComment