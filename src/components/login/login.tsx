import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Alert, Button, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useFormik} from "formik";
import * as yup from 'yup';
import {useLoginMutation} from "../../generated/graphql";
import Loader from "../common/Loader";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../common/AuthProvider";
import {useEffect} from "react";

const StyledForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
})

const validationSchema = yup.object({
    username: yup.string().required("Please enter a username"),
    password: yup.string().required('Please enter a password')
})


const LoginContainer = () => {
    const [login, {data, loading, error}] = useLoginMutation({
        fetchPolicy: "network-only"
    })

    const navigate = useNavigate()

    const location = useLocation()
    const successUrl = location.state?.from?.pathname ?? '/'

    useEffect(() => {
        if (data){
            auth?.saveToken(data.login)
            navigate(successUrl, {replace: true})
        }
    }, [data])

    const auth = useAuth()

    const loginForm = useFormik({
        initialValues: {
            username: "",
            password: ","
        },
        validationSchema,
        onSubmit: (values) =>{
           login({
               variables: {
                   username: values.username,
                   password: values.password,
               }
           })
        }
    })
    return (
        <Box sx={{textAlign: 'center', marginTop: '2em'}}>
            <Typography variant='h6'>Login / <Link to='/register'>Register</Link></Typography>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <StyledForm onSubmit={loginForm.handleSubmit}>
                    <TextField id='username'
                               name="username"
                               placeholder="Enter username"
                               label="username"
                               value={loginForm.values.username}
                               onChange={loginForm.handleChange}
                               onBlur={loginForm.handleBlur}
                               variant={'outlined'}
                               error={loginForm.touched.username && Boolean(loginForm.errors.username)}
                               helperText={loginForm.touched.username && loginForm.errors.username}
                               sx={{marginTop: "10px"}}/>
                    <TextField id='password'
                               type="password"
                               name="password"
                               placeholder="Enter password"
                               label="password"
                               value={loginForm.values.password}
                               onChange={loginForm.handleChange}
                               onBlur={loginForm.handleBlur}
                               variant={'outlined'}
                               error={loginForm.touched.password && Boolean(loginForm.errors.password)}
                               helperText={loginForm.touched.password && loginForm.errors.password}
                               sx={{marginTop: "10px"}}/>
                    <Button variant="contained" type="submit"  sx={{marginTop: "10px"}}>Login</Button>

                    {error && <Alert severity="error">{error.message}, Please try again!</Alert>}
                </StyledForm>
                <Loader open={loading} />
            </Box>
        </Box>
    )
}

export default LoginContainer;