import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen overflow-hidden" style={{ backgroundImage: 'url("/bg.png")', backgroundSize: 'cover' }}>
      <main className="flex items-center justify-between min-h-[calc(100vh-80px)] gap-20">
        <div className="flex flex-col gap-4">
          <div className="text-6xl">
            /S
          </div>
          {/* <img className="w-56" src="/slash.png" alt="slash-logo" /> */}
          <div className="text-3xl">A link manager with powered-AI</div>
          <div className="flex items-center gap-3">
            <a className="bg-slate-700 px-3 py-2 rounded-md transition duration-300 hover:bg-slate-700/50 hover:outline outline-2 hover:outline-slate-300" href="/login" target="_blank">
              Let's start
            </a>
            <div className="bg-slate-700 px-3 py-2 rounded-md flex items-center gap-2 transition duration-300 hover:bg-slate-700/50 hover:outline outline-2 hover:outline-slate-300 cursor-pointer">
              <button>X</button>
              <ExternalLink size={16} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-[30em]">
          <div className="bg-zinc-900 px-10 py-5 rounded-md transition duration-300 hover:outline outline-2 hover:scale-105 cursor-pointer"> 
            <h1 className="text-lg">What is Slash?</h1>
            <p>A link manager without distraction</p>
          </div>
          <div className="bg-zinc-900 px-10 py-5 rounded-md transition duration-300 hover:outline outline-2 hover:scale-105 cursor-pointer"> 
            <h1 className="text-lg">Powered by Bear</h1>
            <p>Bear help you with productivy</p>
          </div>
          <div className="bg-zinc-900 px-10 py-5 rounded-md transition duration-300 hover:outline outline-2 hover:scale-105 cursor-pointer"> 
            <h1 className="text-lg">Okay, but what is Bear?</h1>
            <p><span className="hover:underline"><a href="">Bear</a></span> a finetuned with Claude Sonnet New 3.5 based LLM</p>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-between w-full bg-slate-700/30 backdrop-blur-md px-8 py-5">  
        <div className="flex gap-2">
          <a className="hover:text-white/30" href="">github</a>
          <a className="hover:text-white/30" href="">bear</a>
          <a className="hover:text-white/30" href="">x</a>
        </div>
        <div>
          <a className="hover:text-white/30" href="">contact</a>
        </div>
      </footer>
    </div>
  );
}
