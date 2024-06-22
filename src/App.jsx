import { useState } from 'react'
import HomePage from './components/HomePage.jsx'
import Header from './components/Header.jsx'
import FileDisplay from './components/FileDisplay.jsx'


function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)

  const isAudioAvailable = file || audioStream

  function handleAudioReset(){
    setFile(null)
    setAudioStream(null)
  }

  return (
    <div className='flex flex-col p-4 max-w-[1000px]mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header />
       {isAudioAvailable ? (
        <FileDisplay handleAudioReset= {handleAudioReset} file={file} audioStream= {setAudioStream}/>

       ) : ( 
       <HomePage setFile={setFile} setAudioStream={setAudioStream} />
       )}

      </section>
      <h1 className='text-green-400'>hello there!</h1>
      <footer></footer>

    </div>
  )
}

export default App
