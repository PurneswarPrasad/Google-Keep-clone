import React, { useContext } from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material';
import { DataContext } from '../../context/DataProvider';
import EmptyNotes from '../Notes/EmptyNotes';
import Archive from './Archive';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const AllArchives = () => {

    const { archive } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: "100%" }}>
            <Box sx={{ p: 3, width: "100%" }}>
                <DrawerHeader />
                <Grid container spacing={1} style={{ marginTop: '16px' }}>
                    {
                        archive.map((arch) => (
                            <Grid item>
                                <Archive arch={arch} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default AllArchives