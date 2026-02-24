import { useState } from 'react'
import SideBar from './Components/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-3 w-full min-h-screen bg-slate-800'>
        <SideBar />
    </div>
  )
}

export default App
