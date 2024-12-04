import React, { useContext } from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material';
import { DataContext } from '../../context/DataProvider';
import EmptyNotes from '../Notes/EmptyNotes';
import DelNote from './DelNote';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const AllDelNotes = () => {

    const { deletedNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: "100%" }}>
            <Box sx={{ p: 3, width: "100%" }}>
                <DrawerHeader />
                <Grid container spacing={1} style={{ marginTop: '16px' }}>
                    {
                        deletedNotes.map((delNote) => (
                            <Grid item>
                                <DelNote delNote={delNote} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default AllDelNotes