import '../../css/profile.css'
import React from "react";
import {Profile, useGetProfileQuery} from "../../generated/graphql";
import Loader from "../common/Loader";
import {Alert} from "@mui/material";
import ProfileDetails from "./profileContainer";



const ProfileComponent= () => {
    const {data, loading, error} = useGetProfileQuery();

    const nrOfPosts = 3
    return (
        <>
            <Loader open={loading}/>
            {data && <ProfileDetails profile={data.getProfile as Profile} nrOfPosts={nrOfPosts} />}
            {error && <Alert severity="error">{error.message}, Please try again!</Alert>}
        </>)

}
export default ProfileComponent