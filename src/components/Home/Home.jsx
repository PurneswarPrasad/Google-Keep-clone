import Notes from "../Notes/Notes";
import SwipeDrawer from "../Swipe Drawer/SwipeDrawer"
import { Box } from "@mui/material";

const Home = () => {
    return (
        <Box style={{ display: 'flex', width: "100%" }}>
            <SwipeDrawer />
            <Notes />
        </Box>
    )
}

export default Home