import React, {FC, useEffect, useState} from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Post, useAddCommentMutation, useDislikeMutation, useLikeMutation} from "../../generated/graphql";
import CommentList from "./comments/CommentList";
import AddComment from "./comments/addComment";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useNavigate} from "react-router-dom";


interface Props {
    post: Post
}


const PostItem: FC<Props> = ({post}) => {
    const navigate = useNavigate()
    if(window.location.href.includes('like') || window.location.href.includes('comment')){
        navigate("/posts", {replace: true})
    }
    const [showComments, setShowComments] = useState(false)
    const [addComment, {data, loading, error}] = useAddCommentMutation(({
        fetchPolicy: "network-only"
    }));


       const [like,] = useLikeMutation({
            fetchPolicy: "network-only",

        })

        useEffect(() => {
            data && window.location.reload()
        }, [data]);


    const [dislike] = useDislikeMutation({
        fetchPolicy: "network-only",

    })


    useEffect(() => {
        data && window.location.reload()
    }, [data]);
    const imageUri: string[] = []
    if (post.images && post.images.length > 0) {
        post.images.map(image => imageUri.push(image))
    }

const dislikes = post.dislikes || []
   return (
        <Card sx={{
            width: 500, mb: 5
        }}>
            <CardActionArea >
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" component={"div"}>
                        {post.title}<span className='like'>{post.likes.length}&nbsp;<ThumbUpIcon onClick={()=> {
                           like({
                               variables: {
                                   id: post.id
                               }
                           }).then(()=>window.location.reload())
                    }}/> &nbsp; &nbsp;{dislikes.length}&nbsp;<ThumbDownAltIcon
                    onClick={()=> {
                        dislike({
                            variables: {
                                id: post.id
                            }
                        }).then(() => window.location.reload())
                    }}/></span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <div className="content" dangerouslySetInnerHTML={{__html: post.body}}></div>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{justifyContent: "space-between", ml: 1}}>
                <Typography variant="subtitle1">
                    Created by: {post.author?.username}
                </Typography>
                <Button size="small" color="secondary" variant="contained"
                        onClick={() => setShowComments(!showComments)}>
                    {post.comments && post.comments.length > 0 ? showComments ? 'Hide Comments' : 'Show Comments' : 'No Comments'}
                </Button>
            </CardActions>
            {imageUri.length > 0 && imageUri.map(image => <CardMedia component="img"
                                                                     alt=""
                                                                     width="100%"
                                                                     image={image}/>)}

            <AddComment onSubmit={comment => {
                addComment({
                    variables: {
                        text: comment,
                        postId: post.id,
                    },
                })
            }}/>
            <Divider/>
            {
                showComments && post.comments && post.comments.length > 0 && (
                    <>
                        <CommentList comments={post.comments}/>
                    </>
                )}
        </Card>
    );
}

export default PostItem