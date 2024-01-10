import {Post, useDislikeMutation} from "../../../generated/graphql";
import { useParams} from "react-router-dom";

import PostItem from "../postItem";
import Loader from "../../common/Loader";

const Dislike =  () => {
    const id = useParams().id || ""
    const [dislike, {data, loading, error}] = useDislikeMutation({
        fetchPolicy: "network-only"
    })
    dislike({
        variables: {
            id: id
        }
    }).then()

    return <>
        {loading && <Loader open={loading}/>}
        {data?.dislike && <PostItem post={data.dislike as Post} />}
        {error?.message && error.message}
    </>

}

export default Dislike