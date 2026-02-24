import { Share2, Star, Trash2 } from "lucide-react";

const Editor = () => {
    return (
        <main className="flex-1 flex flex-col bg-slate-900 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
                <span className="text-xs text-slate-400 uppercase tracking-widest">Last edited: some date keda</span>
                <div className="flex gap-4 text-slate-400">
                    <Share2 size={22} className="hover:cursor-pointer" />
                    <Star size={22} className="hover:cursor-pointer"/>
                    <Trash2 size={22} className="hover:cursor-pointer"/>
                </div>
            </div>
            <div className="flex-1 flex flex-col p-8 md:p-12 max-w-4xl mx-auto w-full">
                <input type="text" placeholder="Note Title" className="bg-transparent text-4xl font-bold text-slate-100 outline-none placeholder::text-slate-700 mb-6"/>
                <textarea placeholder="Type anything..."  className="flex-1 bg-transparent text-lg text-slate-200 outline-none resize-none placeholder:text-slate-700 leading-relaxed"></textarea>
            </div>
        </main>
    );
}

export default Editor;