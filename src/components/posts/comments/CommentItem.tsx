import {Comment} from "../../../generated/graphql";
import {FC} from "react";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person3Rounded"
import Typography from "@mui/material/Typography";

interface Props{
    comment: Comment | null
}

const CommentItem: FC<Props> = ({comment}) => {
    return ( comment &&
<ListItem>
    <ListItemIcon>
        <PersonIcon />
        <ListItemText>
            <Typography variant="body1" sx={{fontWeight: "bold"}}>{comment.author.username}</Typography>
            <Typography variant="body2">{comment.text}</Typography>
        </ListItemText>
    </ListItemIcon>
</ListItem>
    )
}

export default CommentItem