import { useState } from 'react'
import HomePage from './components/HomePage.jsx'
import Header from './components/Header.jsx'
import FileDisplay from './components/FileDisplay.jsx'


function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)

  const isAudioAvailable = file || audioStream

  return (
    <div className='flex flex-col p-4 max-w-[1000px]mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header />
       {isAudioAvailable ? (
        <FileDisplay/>

       ) : ( 
       <HomePage />
       )}

      </section>
      <h1 className='text-green-400'>hello there!</h1>
      <footer></footer>

    </div>
  )
}

export default App
