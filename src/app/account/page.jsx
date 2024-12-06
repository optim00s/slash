"use client";

import { useState } from 'react';

export default function Account() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <main className="flex flex-col items-center justify-center min-h-screen">
                <div className="flex flex-col justify-stretch gap-5">
                    <div className="flex items-center justify-between gap-2">
                        <img className="w-20 h-20 rounded-full object-cover" src="./placeholder.jpg" alt="" />
                        <button className="hover:text-white/30">change</button>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        <div>change username</div>
                        <input className="bg-zinc-900 px-3 py-2 rounded-lg outline-none w-60" type="text" placeholder="new username" />
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        <div>change email</div>
                        <input className="bg-zinc-900 px-3 py-2 rounded-lg outline-none w-60" type="text" placeholder="new email" />
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        <div>export as</div>
                        <button className="bg-slate-700 px-3 py-2 rounded-md w-60 transition duration-300 hover:bg-slate-700/50 hover:outline outline-2 hover:outline-slate-300" href="/login" target="_blank">
                            csv
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-5">
                        <button 
                            className="js-delete bg-red-400 px-3 py-2 rounded-md w-full transition duration-300 hover:bg-red-400/50 hover:outline outline-2 hover:outline-slate-300" 
                            onMouseEnter={() => setIsHovered(true)} 
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            delete account
                        </button>    
                        <div className={`js-delete-text text-white/30 text-xs italic transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                            don't break up
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

