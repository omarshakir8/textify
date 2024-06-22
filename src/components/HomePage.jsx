import React from "react"

export default function HomePage(){
    return(
    <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center'>
   <h1 className= 'font-semibold text-7xl sm:text-8xlmd: text-9xl'>text<span className='text-purple-900 bold'>ify</span></h1>
   <h3 className="font-semibold text-2xl">Record <span className='text-purple-900'>&rarr;</span> Transcribe<span className='text-purple-900'>&rarr;</span>Translate</h3>
   <button className="flex specialBtn px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4 text-xl">
    <p className = 'text-purple-900'>Record</p>
    <i className="fa-solid fa-microphone"></i>
   </button>
   <p className='text-base'>Or <label className="text-purple cursor-pointer hover:text-purple-600 duration-200">Upload <input className="hidden" type='file'accept='.mp3,.wave'/></label> a mp3 file</p>
   <p className='italic text-slate-500'>Real-time Audio Transcription & Translation</p>

    </main>
)
}