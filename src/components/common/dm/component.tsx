import {Dm} from "../../../generated/graphql";
import React, {FC} from "react";

interface Props {
    messages: Dm
}

const MessageComponent: FC<Props> = (messages) => {
    return (
        <div className="row gutters-sm">
            <div className="col-sm-6 mb-3">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="d-flex align-items-center mb-3">From: <i
                            className="material-icons text-info mr-2">{messages.messages.sender?.username}</i></h3>
                        <h3 className="d-flex align-items-center mb-3">Title: <i
                            className="material-icons text-info mr-2">{messages.messages.title}</i></h3>
                        <p>{messages.messages.text}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default MessageComponent