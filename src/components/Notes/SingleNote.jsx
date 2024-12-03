import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const StyledCard = styled(Card)`
    width : 240px;
    margin: 8px;
    box-shadow:none;
    border: 1px solid #e0e0e0;
`

const SingleNote = ({ note }) => {
    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <ArchiveOutlinedIcon fontSize='small' style={{marginLeft:'auto'}}/>
                <DeleteOutlinedIcon fontSize='small'/>
            </CardActions>
        </StyledCard>
    )
}

export default SingleNote