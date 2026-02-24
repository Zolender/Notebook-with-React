import { Search, Wind } from "lucide-react";

const NoteList = ({selectedNote, notes}) => {
    
    return (
        <div className="flex flex-col items-start w-72 px-3 py-5 gap-5 border-r-2 border-slate-400 text-slate-100">
            <p className="text-xl font-bold">All Notes</p>
            <div className="relative bg-slate-600 w-full rounded-sm flex items-center px-2">
                <Search size={22} className="" />
                <input type="text" value={'Search notes...'} className="border-none px-3 py-1 outline-none"/>
            </div>
            <div className="flex gap-2 justify-center items-center w-full">
                <Wind size={22} />
                No notes yet...
                </div>
            
        </div>
    );
}

export default NoteList;