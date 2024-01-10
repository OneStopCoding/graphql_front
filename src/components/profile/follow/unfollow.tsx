import {useParams} from "react-router-dom";
import {Profile, useUnFollowMutation} from "../../../generated/graphql";
import Loader from "../../common/Loader";
import ProfileDetails from "../profileContainer";

const UnFollow = () => {
    const username = useParams().username || ""
    const[unfollow, {data, loading, error}] = useUnFollowMutation({
        fetchPolicy: 'network-only'
    })

    unfollow({
        variables: {
            username: username
        }
    }).then()

    return <>
        {loading && <Loader open={loading}/>}
        {data?.unFollow && <ProfileDetails profile={data.unFollow as Profile} nrOfPosts={3}/>}
        {error?.message && error.message}
    </>
}

export default UnFollow