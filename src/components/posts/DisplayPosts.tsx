
import React, {FC} from "react";
import Box from "@mui/material/Box";
import PostItem from "./postItem";
import {Post} from "../../generated/graphql";

interface Props{
    post: Post[];
}

const PostTable : FC<Props> = ( {post} ) => {
    return (
        <Box>
            {
                post.map(post => <PostItem key={post.id} post={post} />)
            }
        </Box>
    )
}

export default PostTable;