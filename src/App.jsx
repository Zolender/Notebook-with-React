import { useState } from 'react'
import SideBar from './Components/SideBar'
import NoteList from './Components/NoteList'
import Editor from './Components/Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex  w-full min-h-screen bg-slate-800'>
        <SideBar />
        <NoteList />
        <Editor />
    </div>
  )
}

export default App
