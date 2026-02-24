import { Clock3, NotebookText, PencilLine, Star, Trash2 } from "lucide-react";

const SideBar = ({onAdd}) => {

    
    return (
        <div className="w-64 border-r-2 border-slate-400 flex flex-col gap-5 justify-start items-center py-5 px-5">
            <button type="button" className="flex justify-center items-center w-full text-center py-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-900 hover:cursor-pointer rounded-lg border-none focus:outline-none transition-colors text-slate-100">
                <PencilLine size={22} className="mx-3"/>
                New Note
            </button>
            <div className="text-slate-500 w-full pl-5 ">
                <p className="mb-3">CATEGORIES</p>
                <p className="hover:bg-slate-500 hover:text-slate-100 hover:cursor-pointer pl-2 w-[70%] rounded-sm py-2 flex items-center gap-2 transition">
                    <NotebookText size={22}/>
                    All Notes
                </p>
                <p className="hover:bg-slate-500 hover:text-slate-100 hover:cursor-pointer pl-2 w-[70%] rounded-sm py-2 flex items-center gap-2 transition">
                    <Star size={22}/>
                    Favourites
                </p>
                <p className="hover:bg-slate-500 hover:text-slate-100 hover:cursor-pointer pl-2 w-[70%] rounded-sm py-2 flex items-center gap-2 transition">
                    <Clock3 size={22}/>
                    Recent
                </p>
                <p className="hover:bg-slate-500 hover:text-slate-100 hover:cursor-pointer pl-2 w-[70%] rounded-sm py-2 flex items-center gap-2 transition">
                    <Trash2 size={22}/>
                    Trash
                </p>
            </div>
        </div>
    );
}
 
export default SideBar;