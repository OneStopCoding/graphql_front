import React from 'react';
import './App.css';
import Layout from "./components/common/layout";
import {Route, Routes} from "react-router-dom";
import LoginContainer from "./components/login/login";
import RequireAuth from "./components/common/requiredAuth";
import PostContainer from "./components/posts/PostContainer";
import AddPost from "./components/posts/addPost";
import Register from "./components/login/register";
import AllUsers from "./components/users/allUser";
import MyPosts from "./components/posts/myPost";
import ProfileComponent from "./components/profile/profile";
import CreateProfile from "./components/profile/addProfile";
import {useAuth} from "./components/common/AuthProvider";
import SearchResults from "./components/common/layout/searchbar/searchResults";
import Follow from "./components/profile/follow/follow";
import SendDM from "./components/common/dm/message"
import ReadDM from "./components/common/dm/read";
import DmDetails from "./components/common/dm/dmDetails";
import DeleteUser from "./components/users/delete";
import UnFollow from "./components/profile/follow/unfollow";
import {DeletePost} from "./components/posts/editPost";

function App() {
    const authContext = useAuth()
    const username = authContext?.user?.username ? authContext.user.username.toString() : ""
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>

                <Route index element={<PostContainer/>}/>
                <Route path="/login" element={<LoginContainer/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/unauthorized" element={<div>You have no access to this function</div>}/>
                <Route path="/posts" element={<PostContainer/>}/>
                <Route path="/search/:username" element={<SearchResults/>}/>

                <Route element={<RequireAuth roles={["ROLE_ADMIN", "ROLE_USER"]}/>}>
                    <Route path="/follow/:username" element={<Follow/>}/>
                    <Route path="/unfollow/:username" element={<UnFollow/>}/>
                    <Route path="/message/:username" element={<SendDM/>}/>
                    <Route path="/DM" element={<ReadDM/>}/>
                    <Route path="/DM/details/:title" element={<DmDetails/>}/>
                    <Route path="/add_post" element={<AddPost/>}/>
                    <Route path="/posts/delete/:id" element={<DeletePost />}/>
                    <Route path="/my_posts" element={<MyPosts nrOfPosts={25} username={username}/>}/>
                    <Route path="/logout" element={<LoginContainer/>}/>
                    <Route path="/create_profile" element={<CreateProfile/>}/>
                    <Route path="/profile" element={<ProfileComponent/>}/>
                </Route>

                <Route element={<RequireAuth roles={["ROLE_ADMIN"]}/>}>
                    <Route path="/users" element={<AllUsers/>}/>
                    <Route path='/users/delete/:id' element={<DeleteUser/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
