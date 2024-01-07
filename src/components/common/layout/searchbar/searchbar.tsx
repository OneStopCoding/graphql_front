import * as yup from "yup";
import { useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Alert, Button, TextField} from "@mui/material";

const validationSchema = yup.object({
    username: yup.string().required("Please enter a username")
})


const SearchBar = () => {

    const navigate = useNavigate()

const searchForm = useFormik({

        initialValues: {
            username: ""
        },
        validationSchema,
        onSubmit: (values) => {
            navigate("/searchResults/" + values.username, {replace: true})

        }
    })
    return (
        <Box sx={{textAlign: 'center', marginTop: '2em'}}>
            <Typography variant='h6'>Search for Profile</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <form onSubmit={searchForm.handleSubmit}>
                    <TextField id='username'
                               name="username"
                               placeholder="Enter username"
                               label="username"
                               value={searchForm.values.username}
                               onChange={searchForm.handleChange}
                               onBlur={searchForm.handleBlur}
                               variant={'outlined'}
                               error={searchForm.touched.username && Boolean(searchForm.errors.username)}
                               helperText={searchForm.touched.username && searchForm.errors.username}
                               sx={{marginTop: "10px"}}/>

                    <Button variant="contained" type="submit" sx={{marginTop: "10px"}}>Search</Button>

                    {searchForm.errors.username && <Alert severity="error">{searchForm.errors.username}, Please try again!</Alert>}
                </form>
            </Box>
        </Box>
    )
}
export default SearchBar
