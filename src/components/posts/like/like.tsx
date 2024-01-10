import {Post, useLikeMutation} from "../../../generated/graphql";
import {useParams} from "react-router-dom";


import Loader from "../../common/Loader";
import PostItem from "../postItem";


const Like =  () => {
    const id = useParams().id || ""
    const [like, {data, loading, error}] = useLikeMutation({
        fetchPolicy: "network-only"
    })
    like({
        variables: {
            id: id
        }
    }).then()
    return <>
        {loading && <Loader open={loading}/>}
        {data?.like && <PostItem post={data.like as Post} />}
        {error?.message && error.message}
    </>
}

export default Like