import {useParams} from "react-router-dom";
import {Profile, useFollowMutation, useGetProfileByUsernameQuery} from "../../generated/graphql";
import Loader from "./Loader";
import ProfileDetails from "../profile/profileContainer";

const Follow = () => {
    const param = useParams().username || ""
    const [follow,{data, loading, error}] = useFollowMutation({
        fetchPolicy: 'network-only'
    })
    follow({variables: {
        username: param
    }}).then()
    console.log(JSON.stringify(data))
    return <>
        {loading && <Loader open={loading} />}
        {data?.follow && <ProfileDetails profile={data.follow as Profile} nrOfPosts={3} />}
        {error?.message && error.message}
    </>
}

export default Follow