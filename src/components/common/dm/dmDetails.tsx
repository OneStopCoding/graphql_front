import {Dm,  useGetDmQuery} from "../../../generated/graphql";
import MessageComponent from "./component";
import {useParams} from "react-router-dom";
import Loader from "../Loader";


const DmDetails = () => {
    const title = useParams().title || ""
    const  {data, loading, error} = useGetDmQuery({
        fetchPolicy: "network-only",
        variables: {
            title: title
        }
    })



    console.log(data)
    console.log(error)
    return  <>
        {loading && <Loader open={loading} />}
        {error && <div>Error!</div>}
        {data && <MessageComponent messages={data.getDM as Dm} />}
    </>
}

export default DmDetails