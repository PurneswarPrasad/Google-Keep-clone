import AllArchives from "../Archive/AllArchives";
import AllDelNotes from "../Deleted/AllDelNotes";
import Notes from "../Notes/Notes";
import SwipeDrawer from "../Swipe Drawer/SwipeDrawer"
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
    return (
        <Box style={{ display: 'flex', width: "100%" }}>
            <Router>
                <SwipeDrawer />
                <Routes>
                    <Route path="/" element={<Notes />} />
                    <Route path="/archive" element={<AllArchives />} />
                    <Route path="/trash" element={<AllDelNotes />} />
                </Routes>
            </Router>
        </Box>
    )
}

export default Home