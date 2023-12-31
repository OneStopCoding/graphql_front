import {FC} from "react";
import {Backdrop, CircularProgress} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface Props {
    open: boolean
}

const Loader: FC<Props> = ({open}) => {
    return (
        <Backdrop open={open} sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            color: "#ede0e0",
            zIndex: (theme) => theme.zIndex.drawer + 1,
        }}>
            <CircularProgress color='inherit'/>
            <Box mt={2}>
                <Typography variant="h6">Loading...</Typography>
                <Typography variant="body1">Please wait, don't refresh!</Typography>
            </Box>
        </Backdrop>
    )
}
export default Loader