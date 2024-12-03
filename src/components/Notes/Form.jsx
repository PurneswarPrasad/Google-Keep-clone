import React, { useState, useRef, useContext } from 'react'
import { Box, TextField } from '@mui/material'
import { styled } from '@mui/material'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { v4 as uuid } from 'uuid';

import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)`
    display:flex;
    flex-direction:column;
    width:600px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
    padding: 10px 15px;
    border-radius:8px;
    border-color:#e0e0e0;
    margin:auto;
    min-height:30px;
`

const note = {
    id: '',
    heading: '',
    text: '',
}

const Form = () => {

    const [showTextField, setShowTextField] = useState(false)

    const containerRef = useRef();

    const [addNote, setAddNote] = useState({ ...note, id: uuid() })

    const { notes, setNotes } = useContext(DataContext)

    const handleClickAway = () => {
        setShowTextField(false);
        containerRef.current.style.minHeight = '30px';

        //clearing the input
        setAddNote({ ...note, id: uuid() })

        //pushing value into notes when clicked away, only if either the heading or text has a value
        if (addNote.heading || addNote.text) {
            setNotes(prevArr => [addNote, ...prevArr]);
        }
    }

    const showField = () => {
        setShowTextField(true);
        containerRef.current.style.minHeight = '80px';
    }

    const onTextChange = (e) => {
        console.log(e.target.name, e.target.value);
        setAddNote({ ...addNote, [e.target.name]: e.target.value })
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={containerRef}>
                {showTextField && <TextField placeholder='Title'
                    variant='standard'
                    InputProps={{ disableUnderline: "true" }}
                    style={{ marginBottom: "10" }}
                    onChange={(e) => onTextChange(e)}
                    name='heading'
                    value={addNote.heading} //controlled components
                />}
                <TextField
                    placeholder='Take a note...'
                    multiline
                    maxRows={Infinity}
                    variant='standard'
                    InputProps={{ disableUnderline: "true" }}
                    onClick={showField}
                    onChange={(e) => onTextChange(e)}
                    name='text'
                    value={addNote.text}
                />
            </Container>
        </ClickAwayListener>
    )
}

export default Form