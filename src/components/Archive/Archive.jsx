import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { styled } from '@mui/material/styles'
import { UnarchiveOutlined } from '@mui/icons-material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
    width : 240px;
    margin: 8px;
    box-shadow:none;
    border: 1px solid #e0e0e0;
`

const Archive = ({ arch }) => {

    const { setNotes, archive, setArchive, setDeletedNotes } = useContext(DataContext);

    const unArchiveNote = (arch) => {
        const updatedNotes = archive.filter(data => data.id !== arch.id);
        setArchive(updatedNotes);
        setNotes(prevState => [arch, ...prevState])
    }

    const deleteNote = (arch) => {
        const updatedNotes = archive.filter(data => data.id !== arch.id);
        setArchive(updatedNotes);
        setDeletedNotes(prevState => [arch, ...prevState])
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{arch.heading}</Typography>
                <Typography>{arch.text}</Typography>
            </CardContent>
            <CardActions>
                <UnarchiveOutlined
                    fontSize='small'
                    style={{ marginLeft: 'auto' }}
                    onClick={() => unArchiveNote(arch)} />
                <DeleteOutlinedIcon
                    fontSize='small'
                    onClick={() => deleteNote(arch)} />
            </CardActions>
        </StyledCard>
    )
}

export default Archive