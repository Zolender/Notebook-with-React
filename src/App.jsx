import { useEffect, useState } from 'react'
import SideBar from './Components/SideBar'
import NoteList from './Components/NoteList'
import Editor from './Components/Editor'

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [selectedNoteID, setSelectedNoteID] = useState(null)
  const [searchQuery, setSearchQuery] =  useState('')
  const [currentView, setCurrentView] = useState('all')
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(false)

  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])


  function addNotes(){
    const newNote = {
      id: Date.now(),
      title: "Untitled Note",
      body: '',
      isFavorite: false,
      lastModified: Date.now()
    }
    const cleanedNotes = notes.filter(note => 
    note.title.trim() !== "Untitled Note" || note.body.trim() !== ""
  );

    setNotes([newNote, ...cleanedNotes])
    setSelectedNoteID(newNote.id)
  }

  function selectNote(id){
    const cleanedNotes = notes.filter(note=>{
      if(note.id!==selectedNoteID)return true
      return note.title.trim() !== "Untitled Note" || note.body.trim() !== "";
    })
    setNotes(cleanedNotes)
    setSelectedNoteID(id)
  }

  function onToggleFavorite(id){
    setNotes(notes.map(note=> note.id === id? {...note, isFavorite: !note.isFavorite}: note))
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

  function onDeleteNote(id){
    const remainingNotes = notes.filter(note=> note.id!==id)

    setNotes(remainingNotes)

    if(id === selectedNoteID){
      setSelectedNoteID(null)
    }
  }


  const filteredNotes = notes.filter(note =>(
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.body.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  return (
    <div className='flex  w-full min-h-screen bg-slate-800'>
        <SideBar onAdd={addNotes} isSideBarExpanded={isSideBarExpanded} setIsSideBarExpanded={setIsSideBarExpanded} />
        <NoteList selectNote={selectNote} notes={filteredNotes} searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedNoteID={selectedNoteID} setSelectedNoteID={setSelectedNoteID} />
        <Editor selectedNote={getSelectedNote()} onUpdateNote={onUpdateNote} onDeleteNote={onDeleteNote} />
    </div>
  )
}

export default App
