import React, {FC} from "react";
import Box from "@mui/material/Box";
import {Comment} from "../../../generated/graphql";
import CommentItem from "./CommentItem";

interface Props{
    comments: Comment[] | null
}

const CommentList: FC<Props> = ({comments}) => {
    return (
        <Box>
            {comments && comments.map(comment => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </Box>
    )
}

export default CommentList