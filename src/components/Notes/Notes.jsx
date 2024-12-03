import React, { useContext } from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material';
import Form from './Form';
import SingleNote from './SingleNote';
import { DataContext } from '../../context/DataProvider';
import EmptyNotes from './EmptyNotes';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Notes = () => {

    const { notes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: "100%" }}>
            <Box sx={{ p: 3, width: "100%" }}>
                <DrawerHeader />
                <Form />
                {
                    notes.length > 0 ?
                        <Grid container spacing={1} style={{ marginTop: '16px' }}>
                            {
                                notes.map((note) => (
                                    <Grid item>
                                        <SingleNote note={note} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                        :
                        <EmptyNotes />
                }

            </Box>
        </Box>
    )
}

export default Notes