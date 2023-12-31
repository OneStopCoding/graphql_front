import {Post, usePostsByUserQuery} from "../../generated/graphql";

import React from "react";
import {useAuth} from "../common/AuthProvider";
import DisplayPosts from "./DisplayPosts";

const MyPosts  = () => {
    const authContext = useAuth()

    const {data, error, loading} = usePostsByUserQuery({
        variables: {
            author: authContext?.user? authContext.user.username.toString() : ""
        }
    })
    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error!</div>}
            {data && <DisplayPosts key="myPosts" post={data.postsForUser as Post[]} />}
        </div>
    )
}

export default MyPosts