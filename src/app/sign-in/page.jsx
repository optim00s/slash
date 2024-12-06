export default function SignUp() {
    return (
        <div>
            <main className="flex flex-col items-center justify-center min-h-screen gap-10">
                <div className="text-3xl">
                    /S
                </div>
                <div className="flex flex-col justify-stretch gap-4">
                    <div className="flex justify-between items-center gap-3">
                        <label htmlFor="email">email</label>
                        <input className="bg-zinc-900 px-3 py-2 rounded-lg outline-none w-60" type="email" id="email" placeholder="optim00s@slash.com" required />
                    </div>
                    <div className="flex justify-between items-center gap-3">
                        <label htmlFor="password">password</label>
                        <input className="bg-zinc-900 px-3 py-2 rounded-lg outline-none w-60" type="password" id="password" placeholder="your password" required/>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4">
                        <button className="bg-slate-700 px-3 py-2 rounded-md w-full transition duration-300 hover:bg-slate-700/50 hover:outline outline-2 hover:outline-slate-300" href="/login" target="_blank">
                            sign in
                        </button>
                        <a href="/login" target="_blank" className="text-white/30 text-xs italic">login</a>
                    </div>
                </div>
            </main>
        </div>
    );
}
