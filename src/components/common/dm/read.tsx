import {Profile, useGetProfileQuery} from "../../../generated/graphql";
import MessageContainer from "./container";

const ReadDM = () => {
    const {data, error, loading} = useGetProfileQuery()
    return (
        <>

            {loading && <div>Loading...</div>}
            {error && <div>Error!</div>}
            {data && <MessageContainer profile={data.getProfile as Profile}/>}
        </>
    )
}
export default ReadDM