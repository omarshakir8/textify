import React from "react"

export default function HomePage(){
    return(
    <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center'>
   <h1 className= 'font-semibold text-7xl sm:text-8xlmd: text-9xl'>text<span className='text-purple-900 bold'>ify</span></h1>
   <h3 className="font-semibold text-2xl">Record <span className='text-purple-900'>&rarr;</span> Transcribe<span className='text-purple-900'>&rarr;</span>Translate</h3>
   <button>
    <p>Record</p>
    <i className="fa-solid fa-microphone"></i>
   </button>

    </main>
)
}