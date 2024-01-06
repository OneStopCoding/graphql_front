import React from 'react';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Layout from "./components/common/layout";
import {Route, Routes} from "react-router-dom";
import LoginContainer from "./components/login/login";
import RequireAuth from "./components/common/requiredAuth";
import PostContainer from "./components/posts/PostContainer";
import AddPost from "./components/posts/addPost";
import Register from "./components/login/register";
import AllUsers from "./components/users/allUser";
import MyPosts from "./components/posts/myPost";
import FileUpload from "./utility/fileUpload";
import AllPosts from "./components/posts/AllPosts";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>

                <Route index element={<AllPosts/>}/>
                <Route path="/login" element={<LoginContainer/>}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/unauthorized" element={<div>You have no access to this function</div>}/>

                <Route path="/posts" element={<PostContainer />}/>

                <Route element={<RequireAuth roles={["ROLE_ADMIN", "ROLE_USER"]}/>}>
                    <Route path="/add_post" element={<AddPost />}/>
                   <Route path="/my_posts" element={<MyPosts />}/>
                    <Route path="/logout" element={<LoginContainer/>}/>
                </Route>

                <Route element={<RequireAuth roles={["ROLE_ADMIN"]}/>}>
                    <Route path="/users" element={<AllUsers />}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
