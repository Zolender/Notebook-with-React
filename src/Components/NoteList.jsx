import {  RotateCcw, Search, Trash2, Wind } from "lucide-react";


const NoteList = ({onPermanentDelete,onRestorNote,currentView, notes, selectedNoteID, searchQuery, setSearchQuery, selectNote}) => {

    return (
        <div className="flex flex-col items-start w-72 px-3 py-5 gap-5 border-r-2 border-slate-700 text-slate-100">
            <p className="text-xl font-bold capitalize">{currentView==='all'? "All Notes": currentView}</p>
            <span className="text-xs text-slate-500 font-medium pb-1">
                {notes.length} {notes.length === 1 ? 'Note' : 'Notes'}
            </span>
            <div className="relative bg-slate-600 w-full rounded-sm flex items-center px-2">
                <Search size={22} className="" />
                <input type="text" placeholder={'Search notes...'} value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} className="border-none px-3 py-1 outline-none"/>
            </div>
            {notes.length===0 && <div className="flex gap-2 justify-center items-center w-full italic">
                <Wind size={22} />
                {!searchQuery? "No notes yet...": "No match found."}
            </div>}
            {notes.map((note) =>(
                <div className={` relative group p-3 rounded-md cursor-pointer w-full transition-all ${note.id === selectedNoteID ? 'bg-slate-700' : 'hover:bg-slate-800'}`}
                        key={note.id}
                        onClick={()=> selectNote(note.id)}

                >
                    <p className="font-bold truncate">{note.title}</p>
                    <p className="truncate text-slate-300 text-sm">{note.body || 'No content...'}</p>

                    {note.isDeleted && (
                        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 p-1 rounded-md shadow-lg">
                            <button onClick={(e)=>{
                                e.stopPropagation()
                                onRestorNote(note.id)
                            }}
                            className="p-1 hover:bg-slate-600 rounded text-green-400 transform-colors"
                            title="Restore"
                            >
                                <RotateCcw size={14}/>
                            </button>
                            <button onClick={(e)=>{
                                e.stopPropagation()
                                onPermanentDelete(note.id)
                            }}
                            title="Delete Permanently"
                            className="p-1 hover:bg-slate-600 rounded text-green-400 transform-colors"

                            >
                                <Trash2 size={14}/>
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default NoteList;