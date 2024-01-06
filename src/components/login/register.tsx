import {useRegisterMutation} from "../../generated/graphql";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useAuth} from "../common/AuthProvider";
import {useFormik} from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Alert, Button, TextField} from "@mui/material";
import Loader from "../common/Loader";
import {styled} from "@mui/material/styles";
import * as yup from "yup";

const StyledForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
})

const validationSchema = yup.object({
    email: yup.string().email().required('Please enter a valid email'),
    username: yup.string().required("Please enter a username"),
    password: yup.string().required('Please enter a password')
})

const Register = () => {
    const [register, {data, loading, error}] = useRegisterMutation({
        fetchPolicy: "network-only"
    })

    const navigate = useNavigate()

    const location = useLocation()
    const successUrl = location.state?.from?.pathname ?? '/'
    const auth = useAuth()
    
    useEffect(() => {
        if (data) {
            auth?.saveToken(data.register)
            navigate(successUrl, {replace: true})
        }
    }, [auth, data, navigate, successUrl])


    const registerForm = useFormik({
        initialValues: {
            email: "",
            username: "",
            password: ""
        },
        validationSchema,
        onSubmit: (values) => {
            register({
                variables: {
                    email: values.email,
                    username: values.username,
                    password: values.password,
                }
            })
        }
    })
    return (
        <Box sx={{textAlign: 'center', marginTop: '2em'}}>
            <Typography variant='h6'>Register</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <StyledForm onSubmit={registerForm.handleSubmit}>
                    <TextField id='email'
                               name="email"
                               placeholder="Enter a email"
                               label="email"
                               value={registerForm.values.email}
                               onChange={registerForm.handleChange}
                               onBlur={registerForm.handleBlur}
                               variant={'outlined'}
                               error={registerForm.touched.email && Boolean(registerForm.errors.email)}
                               helperText={registerForm.touched.email && registerForm.errors.email}
                               sx={{marginTop: "10px"}}/>
                    <TextField id='username'
                               name="username"
                               placeholder="Enter username"
                               label="username"
                               value={registerForm.values.username}
                               onChange={registerForm.handleChange}
                               onBlur={registerForm.handleBlur}
                               variant={'outlined'}
                               error={registerForm.touched.username && Boolean(registerForm.errors.username)}
                               helperText={registerForm.touched.username && registerForm.errors.username}
                               sx={{marginTop: "10px"}}/>
                    <TextField id='password'
                               type="password"
                               name="password"
                               placeholder="Enter password"
                               label="password"
                               value={registerForm.values.password}
                               onChange={registerForm.handleChange}
                               onBlur={registerForm.handleBlur}
                               variant={'outlined'}
                               error={registerForm.touched.password && Boolean(registerForm.errors.password)}
                               helperText={registerForm.touched.password && registerForm.errors.password}
                               sx={{marginTop: "10px"}}/>
                    <Button variant="contained" type="submit" sx={{marginTop: "10px"}}>Register</Button>

                    {error && <Alert severity="error">{error.message}, Please try again!</Alert>}
                </StyledForm>
                <Loader open={loading}/>
            </Box>
        </Box>
    )
}
export default Register