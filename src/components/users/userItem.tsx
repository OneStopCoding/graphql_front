import React, {FC} from "react";
import {Card, CardActionArea, CardActions, CardContent, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import {User} from "../../generated/graphql";
import {Link} from "react-router-dom";

interface  Props{
    user: User
}

const UserItem: FC<Props> = ({user}) =>{

    return (
        <Card sx={{
    width: 500, mb: 5}}>
            <Link to={"/users/delete/" + user.email}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" component={"div"}>
                        Username: {user.username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        E-mail: {user.email}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
            <CardActions sx={{justifyContent: "space-between", ml: 1}}>
                <Typography variant="subtitle1">
                   Roles: {user.roles}
                </Typography>

            </CardActions>

            <Divider />

        </Card>
    );
}

export default UserItem