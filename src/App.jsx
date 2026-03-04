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
      lastModified: Date.now(),
      isDeleted: false
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
    const remainingNotes = notes.map(note=> note.id===id? {...note, isDeleted: true}: note)

    setNotes(remainingNotes)

    if(id === selectedNoteID){
      setSelectedNoteID(null)
    }
  }


  const filteredNotes = notes.filter(note =>{
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.body.toLowerCase().includes(searchQuery.toLowerCase())

      if(currentView === 'Favorites'){
        return matchesSearch && note.isFavorite
      }

      if(currentView=== 'Recent'){
        const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000
        return matchesSearch && note.lastModified > oneDayAgo
      }

      if(currentView==='Deleted')return matchesSearch && note.isDeleted

      if(note.isDeleted)return false;

      return matchesSearch
  
})

  return (
    <div className='flex  w-full min-h-screen bg-slate-800'>
        <SideBar onAdd={addNotes} isSideBarExpanded={isSideBarExpanded} setIsSideBarExpanded={setIsSideBarExpanded} currentView={currentView} setCurrentView={setCurrentView} onToggle={onToggleFavorite} />
        <NoteList currentView={currentView} selectNote={selectNote} notes={filteredNotes} searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedNoteID={selectedNoteID} setSelectedNoteID={setSelectedNoteID} />
        <Editor onToggleFavorite={onToggleFavorite} selectedNote={getSelectedNote()} onUpdateNote={onUpdateNote} onDeleteNote={onDeleteNote} />
    </div>
  )
}

export default App
