import {useGetProfileQuery} from "../../generated/graphql";

export default function IsExistingProfile() {
   const {data, loading, error} =  useGetProfileQuery()

    return data?.getProfile || null
}