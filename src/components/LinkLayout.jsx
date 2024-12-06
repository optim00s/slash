"use client"
import { useState } from "react";

function LinkCard({ onClick }) {
    return (
        <div 
            className="bg-zinc-900 flex flex-col justify-around gap-5 h-72 p-2 rounded-md w-72 mx-auto cursor-pointer"
            onClick={onClick}
            aria-label="Open link details"
        >
            <img className="rounded-md" src="images/placeholder.jpg" alt="Link preview" />
            <div className="flex flex-col justify-between gap-2">
                {/* Tooltip for link URL */}
                <div className="truncate" title="https://geohot.github.io//blog/jekyll/update/2024/10/28/americas-future.html">
                    https://geohot.github.io//blog/jekyll/update/2024/10/28/americas-future.html
                </div>
                {/* Tooltip for link description */}
                <div 
                    className="bg-slate-700 text-sm px-2 py-1 w-fit max-w-64 rounded-md truncate" 
                    title="how to achieve everything which I want"
                >
                    how to achieve everything which I want
                </div>
            </div>
        </div>
    );
}

function LinkModal({ onClose }) {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/10 backdrop-blur-md">
            <div className="bg-zinc-900 flex flex-col gap-6 p-5 rounded-md">
                <div className="flex items-stretch gap-5">
                    <div className="flex flex-col gap-5 w-72">
                        <img className="rounded-md" src="/placeholder.jpg" alt="Link preview in modal" />
                        {/* Tooltip for modal link URL */}
                        <div 
                            className="truncate" 
                            title="https://geohot.github.io//blog/jekyll/update/2024/10/28a"
                        >
                            https://geohot.github.io//blog/jekyll/update/2024/10/28a
                        </div>
                        {/* Tooltip for modal description */}
                        <div 
                            className="bg-slate-700 text-sm px-2 py-1 w-fit max-w-64 rounded-md truncate" 
                            title="How to achieve everything you want"
                        >
                            How to achieve everything you want
                        </div>
                    </div>
                    <textarea 
                        className="bg-zinc-800 outline-none resize-none w-80 h-full overflow-x-auto px-2 py-1 rounded-md" 
                        defaultValue="Attention Is All You Need" 
                        aria-label="Edit text"
                    />
                </div>
                <button 
                    className="bg-red-400 px-3 py-2 rounded-md w-full transition duration-300 hover:bg-red-400/50 hover:outline outline-2 hover:outline-slate-300"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default function LinkLayout() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xxl:grid-cols-5 mt-20 md:mt-14 gap-8">
            <LinkCard onClick={() => setModalOpen(true)} />
            {modalOpen && <LinkModal onClose={() => setModalOpen(false)} />}
        </main>
    );
}
