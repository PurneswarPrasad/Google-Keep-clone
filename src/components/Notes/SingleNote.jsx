import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { styled } from '@mui/material/styles'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
    width : 240px;
    margin: 8px;
    box-shadow:none;
    border: 1px solid #e0e0e0;
`

const SingleNote = ({ note }) => {

    const { notes, setNotes, setArchive, setDeletedNotes } = useContext(DataContext);

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setArchive(prevState => [note, ...prevState])
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeletedNotes(prevState => [note, ...prevState])
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <ArchiveOutlinedIcon
                    fontSize='small'
                    style={{ marginLeft: 'auto' }}
                    onClick={() => archiveNote(note)} />
                <DeleteOutlinedIcon
                    fontSize='small'
                    onClick={() => deleteNote(note)} />
            </CardActions>
        </StyledCard>
    )
}

export default SingleNote