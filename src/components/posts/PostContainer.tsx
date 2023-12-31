import {Post, useAllPostsQuery} from "../../generated/graphql";
import React from "react";
import Box from "@mui/material/Box";
import Loader from "../common/Loader";
import {Alert} from "@mui/material";
import PostTable from "./DisplayPosts";

const PostContainer = () => {
    const {data, loading, error} = useAllPostsQuery({
        fetchPolicy: "network-only"
    });
    return (
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <Loader open={loading} />
            {data && <PostTable post={data.allPosts as Post[] }/> }
            {error && <Alert severity="error">{error.message}, Please try again!</Alert>}
        </Box>
    )
}
export default PostContainer