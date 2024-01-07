import * as React from 'react';
import {FC} from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import RegisterIcon from '@mui/icons-material/HowToReg'
import {Link} from "react-router-dom";
import {useAuth} from "../AuthProvider";
import SearchBar from "./searchbar/searchbar";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const drawerWidth = 240;

const UserOptionDiv = styled(Box)({
    width: '90%',
    justifyContent: 'space-between',
    display: 'flex',
})

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

interface Props {
    open: boolean;
    handleDrawerOpen: () => void;
}

const StyledLink = styled(Link)({
    color: "inherit",
    textDecoration: "none",
})

const Header: FC<Props> = ({open, handleDrawerOpen}) => {
    const authContext = useAuth()
    const logout = () => {
        authContext?.clearToken()
    }
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{mr: 2, ...(open && {display: 'none'})}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <UserOptionDiv>
                        <Typography variant="h6" noWrap component="div">
                            One Stop Coding Forum
                        </Typography>

                        <Box>
                            {authContext?.user == null ? (
                                <>
                                    <StyledLink to={"/login"}>
                                        <IconButton color="inherit" aria-label="open drawer"
                                                    edge="start" sx={{mr: 2}}>
                                            <LoginIcon/>
                                        </IconButton>
                                    </StyledLink>
                                    <StyledLink to={"/register"}>
                                        <IconButton color="inherit"
                                                    edge="start" sx={{mr: 2}}>
                                            <RegisterIcon/>
                                        </IconButton>
                                    </StyledLink>
                                   </>
                            ) : (
                                <>
                                    <StyledLink to={"/logout"}>
                                        <IconButton onClick={logout} color="inherit"
                                                    edge="start" sx={{mr: 2}}>
                                            <LogoutIcon/>
                                            <Typography  variant="h6">&nbsp;{ authContext.user.username}</Typography>
                                        </IconButton>
                                    </StyledLink>
                                </>
                            )}
                        </Box>
                    </UserOptionDiv>
                </Toolbar>
            </AppBar>

        </Box>
    )
}

export default Header;