import { useState, useRef, useEffect } from 'react'
import HomePage from './components/HomePage.jsx'
import Header from './components/Header.jsx'
import FileDisplay from './components/FileDisplay.jsx'
import Information from './components/Information.jsx'
import Transcribing from './components/Transcribing.jsx'


function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)
  const [output, setOutput] = useState(null)
  const [downloading, setDownloading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [finished, setFinished] = useState(false)

  const isAudioAvailable = file || audioStream

  function handleAudioReset(){
    setFile(null)
    setAudioStream(null)
  }


  const worker = useRef(null)

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(new URL('./utils/whisper.worker.js', import.meta.url), {
        type: 'module'
      })
    }


    const onMessageRecieved = async (e) => {
      switch (e.data.typet) {
        case 'DOWNLOADING':
          setDownloading(true)
          console.log('DOWNLOADING')
          break;
        case 'LOADING':
          setLoading(true)
          console.log('LOADING')
          break;  
        case 'RESULT':
          setOutput(e.data.results)
          break;  
        case 'INFERENCE_DONE':
          setFinished(true)
          console.log('DONE')
          break;
      }
    }


    worker.current.addEventListener('message', onMessageRecieved)
    return () => worker.current.removeEventListener('message. onMessageRecieved')
  }, [])

  return (
    <div className='flex flex-col p-4 max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header />
        {output ? (
          <Information />
        ) : loading ? (
          <Transcribing />
        ) : isAudioAvailable ? (
          <FileDisplay 
            handleAudioReset={handleAudioReset} 
            file={file} 
            audioStream={audioStream} 
          />
        ) : (
          <HomePage setFile={setFile} setAudioStream={setAudioStream} />
        )}
      </section>
      <footer></footer>
    </div>
  );
};

export default App
