import React from 'react'

export default function FileDisplay(props) {
  const {handleAudioReset, file, audioStream} = props

  return (
    <div>
      <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center pb-20 w-fit max-w-full mx-auto'>
      <h1 className= 'font-semibold text-6xl sm:text-7xl md: text-8xl'>Your<span className='text-purple-900 bold'>File</span></h1>
      <div className='mx-auto flex flex-col text-left my-4'>
        <h3 className='font-semibold text-2xl'>Name</h3>
        <p className='text-2xl'>{file.name}</p>
        </div>



      <div className='flex items-center justify-between gap-4'>
        <button className='text-slate-400'>Reset</button>
        <button className='specialBtn px-4 py-2 rounded-lg text-purple-900'>
          <p>Transcribe</p>
          </button>
      </div>



      </main>
    </div>
  )
}
