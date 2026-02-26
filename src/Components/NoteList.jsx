import {  Search, Wind } from "lucide-react";


const NoteList = ({setSelectedNoteID, notes, selectedNoteID, searchQuery, setSearchQuery}) => {

    return (
        <div className="flex flex-col items-start w-72 px-3 py-5 gap-5 border-r-2 border-slate-400 text-slate-100">
            <p className="text-xl font-bold">All Notes</p>
            <div className="relative bg-slate-600 w-full rounded-sm flex items-center px-2">
                <Search size={22} className="" />
                <input type="text" placeholder={'Search notes...'} value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} className="border-none px-3 py-1 outline-none"/>
            </div>
            {notes.length===0 && <div className="flex gap-2 justify-center items-center w-full italic">
                <Wind size={22} />
                {!searchQuery? "No notes yet...": "No match found."}
            </div>}
            {notes.map((note) =>(
                <div className={`p-3 rounded-md cursor-pointer w-full transition-all ${note.id === selectedNoteID ? 'bg-slate-700' : 'hover:bg-slate-800'}`}
                        key={note.id}
                        onClick={()=> setSelectedNoteID(note.id)}
                >
                    <p className="font-bold truncate">{note.title}</p>
                    <p className="truncate text-slate-300 text-sm">{note.body || 'No content...'}</p>

                </div>
            ))}
        </div>
    );
}

export default NoteList;