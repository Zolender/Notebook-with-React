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
      title: "Untitled Note",
      body: '',
      lastModified: Date.now()
    }

    setNotes([newNote, ...notes])
    setSelectedNoteID(newNote.id)
  }

  function onUpdateNote(updatedNote){
    const updatedNoteArr = notes.map(note=>{
      if(note.id == updatedNote.id)return updatedNote

      return note
    })
    setNotes(updatedNoteArr)
  }

  function getSelectedNote(){
      return notes.find(note=> note.id ===  selectedNoteID)
  }

  return (
    <div className='flex  w-full min-h-screen bg-slate-800'>
        <SideBar onAdd={addNotes}/>
        <NoteList notes={notes} selectedNoteID={selectedNoteID} setSelectedNoteID={setSelectedNoteID} />
        <Editor selectedNote={getSelectedNote()} onUpdateNote={onUpdateNote}/>
    </div>
  )
}

export default App
