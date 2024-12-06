import LinkLayout from "@/components/LinkLayout"

export default function MainLayout() {
    return (
        <div className="p-8">
            <header className="fixed top-0 left-0 right-0 px-3 py-2 md:py-3 bg-zinc-900/30 backdrop-blur-md">
                <nav className="flex flex-col sm:flex-col md:flex-row items-center justify-between gap-2 md:gap-5">
                    <div className="flex justify-between gap-6 w-full">
                        <input className="bg-zinc-900 px-3 h-10 w-3/5 rounded-md outline-none" type="text" placeholder="add link" />
                        <select className="bg-zinc-900 text-white px-3 h-10 w-2/5 rounded-md cursor-pointer" value="">
                            <option className="" disabled>~~choose category~~</option>
                            <option className="" value="research">research</option>
                            <option className="" value="science & technology">science & technology</option>
                            <option className="" value="wikipedia">wikipedia</option>
                        </select>
                    </div>
                    <button className="bg-slate-700 px-3 py-2 rounded-md w-32 transition duration-300 hover:bg-slate-700/50 hover:outline outline-2 hover:outline-slate-300">Add</button>
                </nav>
            </header> 
            <LinkLayout />
        </div>
    )
}