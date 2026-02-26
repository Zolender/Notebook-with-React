import { useState } from 'react'
import SideBar from './Components/SideBar'
import NoteList from './Components/NoteList'
import Editor from './Components/Editor'

function App() {
  const [notes, setNotes] = useState([])
  const [selectedNoteID, setSelectedNoteID] = useState(null)

  function addNotes(){
    const newNote = {
      id: Date.now(),
      titel: "Untitled Note",
      body: '',
      lastModified: Date.now()
    }

    setNotes([newNotes, ...notes])
    setSelectedNoteID(newNote.id)
  }

  function getSelectedNote(){
      return notes.find(note=> note.id ===  selectedNoteID)
  }

  return (
    <div className='flex  w-full min-h-screen bg-slate-800'>
        <SideBar onAdd={addNotes}/>
        <NoteList notes={notes} selectedNoteID={selectedNoteID} setSelectedNoteID={setSelectedNoteID} />
        <Editor selectedNote={getSelectedNote}/>
    </div>
  )
}

export default App
