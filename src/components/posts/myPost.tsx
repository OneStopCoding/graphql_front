import {Post, usePostsByUserQuery} from "../../generated/graphql";

import React, {FC} from "react";
import DisplayPosts from "./DisplayPosts";
interface Props{
    nrOfPosts: number
    username: string
}
console.log()
const MyPosts:FC<Props>  = (props) => {
    const {data, error, loading} = usePostsByUserQuery({
        variables: {
            author: props.username
        }
    })
    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error!</div>}
            {data && <DisplayPosts key="myPosts" post={data.postsForUser?.slice(0, 3) as Post[]} />}
        </div>
    )
}

export default MyPosts