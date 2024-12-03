import React, { useState } from 'react'
import { createContext } from 'react'

export const DataContext = createContext(null)

const DataProvider = ({ children }) => {

    const [notes, setNotes] = useState([])
    const [archive, setArchive] = useState([])
    const [deletedNotes, setDeletedNotes] = useState([])

    return (
        <DataContext.Provider value={{
            notes, setNotes,
            archive, setArchive,
            deletedNotes, setDeletedNotes
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider