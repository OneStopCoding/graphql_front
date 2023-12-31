
import React, {FC} from "react";
import Box from "@mui/material/Box";
import { User} from "../../generated/graphql";
import UserItem from "./userItem";

interface Props{
    users: User[];
}

const UserTable : FC<Props> = ( {users} ) => {
    return (
        <Box>
            {
                users.map(user => <UserItem key={user.email} user={user} />)
            }
        </Box>
    )
}

export default UserTable;