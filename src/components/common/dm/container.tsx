import {Profile} from "../../../generated/graphql";
import React, {FC} from "react";
import {Link} from "react-router-dom";

interface Props {
    profile: Profile
}

const MessageContainer: FC<Props> = (profile) => {
    const profilePic = profile.profile.profilePic || ""
    const messages = profile.profile.messages || []
    const unRead = []
    const read = []
    for (let i = messages.length - 1; i > 0; i--) {
        if (messages[i]?.read === false) {
            unRead.push(messages[i])
        } else {
            read.push(messages[i])
        }
    }

    return (
        <>
            <div className="container">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">

                                    <div className="d-flex flex-column align-items-center text-center details_image">
                                        <div className="details">
                                            <h4>{profile.profile.firstname} {profile.profile.lastname}</h4>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">{profile.profile.location?.city?.name}, {profile.profile.location?.provence?.name}, {profile.profile.location?.country?.name}</p>
                                        </div>
                                        <img src={profilePic} alt="Admin"
                                             className="rounded-circle" width="150"/>
                                        <div className="mt-3">
                                            <div> &nbsp; &nbsp; Followers: {profile.profile.followers?.length || 0}</div>
                                            <div> &nbsp; &nbsp; Messages: {unRead.length || 0}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                     className="feather feather-globe mr-2 icon-inline">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                                    <path
                                                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                                </svg>
                                                Website
                                            </h6>
                                            <span
                                                className="text-secondary">{profile.profile.socials?.website}</span>
                                        </td>
                                        <td className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                     className="feather feather-github mr-2 icon-inline">
                                                    <path
                                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                </svg>
                                                Github
                                            </h6>
                                            <span
                                                className="text-secondary">{profile.profile.socials?.github}</span>
                                        </td>
                                        <td className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                     className="feather feather-twitter mr-2 icon-inline text-info">
                                                    <path
                                                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                </svg>
                                                Twitter
                                            </h6>
                                            <span
                                                className="text-secondary">{profile.profile.socials?.twitter}</span>
                                        </td>
                                        <td className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                     className="feather feather-instagram mr-2 icon-inline text-danger">
                                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                    <path
                                                        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                </svg>
                                                Instagram
                                            </h6>
                                            <span
                                                className="text-secondary">{profile.profile.socials?.instagram}</span>
                                        </td>
                                        <td className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                     className="feather feather-facebook mr-2 icon-inline text-primary">
                                                    <path
                                                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                                </svg>
                                                Facebook
                                            </h6>
                                            <span className="text-secondary">{profile.profile.socials?.fb}</span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Username</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profile.profile.user?.username}
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profile.profile.user?.email}
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                        {
                            unRead.length > 0 && unRead.map(
                                message => (
                                    <div className="row gutters-sm">
                                        <div className="col-sm-6 mb-3">
                                            <div className="card h-100">
                                                <Link to={"/DM/details/" + message?.title}>
                                                    <div className="card-body">
                                                        <h3 className="d-flex align-items-center mb-3">{
                                                            message?.read ? <span></span> :
                                                                <span className="material-icons text-danger">New! </span>
                                                        } From: <i
                                                            className="material-icons text-info mr-2">{message?.sender.username}</i>
                                                        </h3>
                                                        <h3 className="d-flex align-items-center mb-3">Title: <i
                                                            className="material-icons text-info mr-2">{message?.title}</i>
                                                        </h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        }

                        {
                            read.length > 0 && read.map(
                                message => (
                                    <div className="row gutters-sm">
                                        <div className="col-sm-6 mb-3">
                                            <div className="card h-100">
                                                <Link to={"/DM/details/" + message?.title}>
                                                    <div className="card-body">
                                                        <h3 className="d-flex align-items-center mb-3">{
                                                            message?.read ? <span></span> :
                                                                <span className="material-icons text-danger">New! </span>
                                                        } From: <i
                                                            className="material-icons text-info mr-2">{message?.sender.username}</i>
                                                        </h3>
                                                        <h3 className="d-flex align-items-center mb-3">Title: <i
                                                            className="material-icons text-info mr-2">{message?.title}</i>
                                                        </h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default MessageContainer