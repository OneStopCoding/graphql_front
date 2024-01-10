import {useParams} from "react-router-dom";
import {Profile, useFollowMutation} from "../../../generated/graphql";
import Loader from "../../common/Loader";
import ProfileDetails from "../profileContainer";



const Follow = () => {
    const username = useParams().username || ""
    const [follow, {data, loading, error}] = useFollowMutation({
        fetchPolicy: 'network-only'
    })

    follow({
        variables: {
            username: username
        }
    }).then()
    return <>
        {loading && <Loader open={loading}/>}
        {data?.follow && <ProfileDetails profile={data.follow as Profile} nrOfPosts={3}/>}
        {error?.message && error.message}
    </>
}

export default Follow