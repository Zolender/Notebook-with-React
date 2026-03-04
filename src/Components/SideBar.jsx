import { Clock3, Menu, NotebookText, PencilLine, Star, Trash2 } from "lucide-react";

const SideBar = ({onAdd, setIsSideBarExpanded, isSideBarExpanded, setCurrentView, currentView}) => {


    return (
        <div className={`transition-all duration-300 border-r-2 border-slate-700 h-screen flex flex-col bg-slate-800 overflow-hidden ${isSideBarExpanded ? 'w-64' : 'w-16'}`}>            
            <div className={`py-2 flex justify-start pl-4`}>
                <button type="button">
                    <Menu size={35} onClick={()=>setIsSideBarExpanded(!isSideBarExpanded)} className="p-2 hover:bg-slate-700 rounded-lg self-end mb-4 text-slate-300 "/>
                </button>
            </div>
            <button onClick={onAdd} type="button" className={`flex justify-center items-center mx-auto  text-center py-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-900 hover:cursor-pointer rounded-lg border-none focus:outline-none transition-colors mb-2 text-slate-100 ${isSideBarExpanded? 'w-[90%]': 'px-2'}`} >
                <PencilLine size={22} />
                {isSideBarExpanded && <span className="ml-3">New Note</span>}
            </button>
            <div className="text-slate-500 w-full pl-5 transition-all duration-300">
                {isSideBarExpanded&& <p className="mb-3">CATEGORIES</p>}
                <p
                    onClick={() => setCurrentView('all')}
                    className={` hover:text-slate-100 hover:cursor-pointer rounded-sm py-2 flex items-center gap-2 transition ${isSideBarExpanded? "pl-2 w-[70%] hover:bg-slate-500": ''} ${currentView === 'all' ? isSideBarExpanded? 'bg-slate-600 text-slate-100': 'text-slate-100' : 'hover:text-slate-100'}`}>
                    <NotebookText size={22}/>
                    {isSideBarExpanded && <span className="ml-3">All Notes</span>}
                </p>
                <p 
                    onClick={() => setCurrentView('Favorites')}
                    className={` hover:text-slate-100 hover:cursor-pointer rounded-sm py-2 flex items-center gap-2 transition ${isSideBarExpanded? "pl-2 w-[70%] hover:bg-slate-500": ''} ${currentView === 'favorites' ? isSideBarExpanded? 'bg-slate-600 text-slate-100': 'text-slate-100' : 'hover:text-slate-100'}`}>
                    <Star size={22}/>
                    {isSideBarExpanded && <span className="ml-3">Favorite</span>}
                </p>
                <p 
                    onClick={() => setCurrentView('Recents')}
                    className={` hover:text-slate-100 hover:cursor-pointer rounded-sm py-2 flex items-center gap-2 transition ${isSideBarExpanded? "pl-2 w-[70%] hover:bg-slate-500": ''} ${currentView === 'recents' ? isSideBarExpanded? 'bg-slate-600 text-slate-100': 'text-slate-100' : 'hover:text-slate-100'}`}>
                    <Clock3 size={22}/>
                    {isSideBarExpanded && <span className="ml-3">Recent</span>}
                </p>
                <p 
                    onClick={() => setCurrentView('Deleted')}
                    className={` hover:text-slate-100 hover:cursor-pointer rounded-sm py-2 flex items-center gap-2 transition ${isSideBarExpanded? "pl-2 w-[70%] hover:bg-slate-500": ''} ${currentView === 'deleted' ? isSideBarExpanded? 'bg-slate-600 text-slate-100': 'text-slate-100' : 'hover:text-slate-100'}`}>
                    <Trash2 size={22} />
                    {isSideBarExpanded && <span className="ml-3">Trash</span>}
                </p>
            </div>
        </div>
    );
}
 
export default SideBar;