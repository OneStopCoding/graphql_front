import {Profile, useGetProfileByUsernameQuery} from "../../../../generated/graphql";
import {useParams} from "react-router-dom";
import Loader from "../../Loader";
import ProfileDetails from "../../../profile/profileContainer";

const SearchResults = () => {
    const param = useParams().username || ""
    const {data, loading, error} = useGetProfileByUsernameQuery({
        variables: {
            username: param
        }
    })
    return <>
        {loading && <Loader open={loading} />}
        {data?.getProfileByUsername && <ProfileDetails profile={data.getProfileByUsername as Profile} nrOfPosts={3} />}
        {error?.message && error.message}
    </>
}

export default SearchResults