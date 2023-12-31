import {Post, useAllPostsQuery, useAllUsersQuery, User} from "../../generated/graphql";
import Box from "@mui/material/Box";
import Loader from "../common/Loader";
import PostTable from "./DisplayPosts";
import {Alert} from "@mui/material";
import React from "react";
import DisplayUsers from "../users/DisplayUsers";

const AllPosts = () =>{

    const {data, error, loading} = useAllUsersQuery({
        fetchPolicy: "network-only"
    });
    return (
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <Loader open={loading} />
            {data && <DisplayUsers users={data.allUsers as User[] }/> }
            {error && <Alert severity="error">{error.message}, Please try again!</Alert>}
        </Box>
    )
};

export default AllPosts