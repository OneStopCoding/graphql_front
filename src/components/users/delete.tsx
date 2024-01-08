import {useDeleteUserMutation} from "../../generated/graphql";
import {useNavigate, useParams} from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteUser = () => {
    const id = useParams().id || ""
    const [remove, {data, loading, error}] = useDeleteUserMutation({
        fetchPolicy: "network-only"
    })

    const navigate = useNavigate()

    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/users', {replace: true})
    };

    const handleAgree = () => {
        remove({
            variables: {
                id: id
            }
        }).then(() => {
                navigate("/users", {replace: true})
                window.location.reload()
            }
        )
    }


    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete this user?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        By agreeing this user will be deleted from the database.<br />
                        This action can not be undone
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleAgree} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default DeleteUser

