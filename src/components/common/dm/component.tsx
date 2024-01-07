import {Dm} from "../../../generated/graphql";
import React, {FC} from "react";

interface Props {
    messages: Dm
}

const MessageComponent: FC<Props> = (messages) => {
    const imageUri: string[] = []
    if (messages.messages?.images){
        messages.messages.images.map(image => imageUri.push(image))
    }
    return (
        <div className="row gutters-sm">
            <div className="col-sm-6 mb-3">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="d-flex align-items-center mb-3">{
                            messages.messages.read ? <span></span> :
                                <span className="material-icons text-danger">New! </span>
                        } From: <i
                            className="material-icons text-info mr-2">{messages.messages.sender?.username}</i></h3>
                        <h3 className="d-flex align-items-center mb-3">Title: <i
                            className="material-icons text-info mr-2">{messages.messages.title}</i></h3>
                        <p>{messages.messages.text}</p>
                        <p>{imageUri.length > 0 && imageUri.map(image => <img src={image} alt="" />) }</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default MessageComponent