import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { styled } from '@mui/material/styles'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import { DeleteForever } from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
    width : 240px;
    margin: 8px;
    box-shadow:none;
    border: 1px solid #e0e0e0;
`

const DelNote = ({ delNote }) => {

    const { setNotes, setArchive, deletedNotes, setDeletedNotes } = useContext(DataContext);

    const deleteForever = (delNote) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== delNote.id);
        setDeletedNotes(updatedNotes);
    }

    const restoreNote = (delNote) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== delNote.id);
        setDeletedNotes(updatedNotes);
        setNotes(prevState => [delNote, ...prevState])
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{delNote.heading}</Typography>
                <Typography>{delNote.text}</Typography>
            </CardContent>
            <CardActions>
                <DeleteForever
                    fontSize='small'
                    style={{ marginLeft: 'auto' }}
                    onClick={() => deleteForever(delNote)} />
                <RestoreFromTrashIcon
                    fontSize='small'
                    onClick={() => restoreNote(delNote)} />
            </CardActions>
        </StyledCard>
    )
}

export default DelNote