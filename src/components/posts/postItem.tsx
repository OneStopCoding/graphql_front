import React, {FC, useEffect, useState} from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Post, useAddCommentMutation} from "../../generated/graphql";
import CommentList from "./comments/CommentList";
import AddComment from "./comments/addComment";

interface  Props{
    post: Post
}


const PostItem: FC<Props> = ({post}) =>{
    const [showComments, setShowComments] = useState(false)
const [addComment, {data, loading, error}] = useAddCommentMutation(({
    fetchPolicy: "network-only"
}));
    const imageUri: string[] = []
    if (post.images && post.images.length > 0){
        post.images.map(image => imageUri.push(image))
    }
const body = document.getElementById('body')
    if(body !== null)
        body.innerHTML = post.body

    useEffect(() => {
        if (data){
            window.location.reload()
        }
    },[data])

    return (
        <Card sx={{
    width: 500, mb: 5}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" component={"div"}>
                        {post.title}
                    </Typography>
                    <Typography  variant="body2" color="text.secondary">
                        <div id="body"></div>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{justifyContent: "space-between", ml: 1}}>
                <Typography variant="subtitle1">
                   Created by: {post.author?.username}
                </Typography>
                <Button size="small" color="secondary" variant="contained" onClick={() => setShowComments(!showComments)}>
                    {post.comments && post.comments.length > 0? showComments ? 'Hide Comments' : 'Show Comments' : 'No Comments'}
                </Button>
            </CardActions>
            <p>{imageUri.length > 0 && imageUri.map(image => <img src={image} alt="" />) }</p>

            <AddComment onSubmit={comment => {
                addComment({
                    variables: {
                        text: comment,
                        postId: post.id,
                    },
                })
            }} />
            <Divider />
            {
                showComments && post.comments && post.comments.length > 0 && (
                    <>
                        <CommentList comments={post.comments} />
                </>
           ) }
        </Card>
    );
}

export default PostItem