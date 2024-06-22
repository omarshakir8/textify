import React, {useState, useEffect, useRef} from "react"

export default function HomePage(props){

    const {setAudioStream, setFile, } = props

    const [recordingStatus, setRecordingStatus] = useState('inactive')
    const [audioChunks, setAudioChunks] = useState([])
    const [duration, setDuration] = useState(0)

    const mediaRecorder = useRef(null)

    const mimeType = 'audio/webm'

    async function startRecording() {
        let tempStream

        console.log('Start Recording')

        try {
            const streamData = navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false
            })
            tempStream = streamData

        } catch (err) {
            console.log(err.message)
            return
        }
        setRecordingStatus('recording')


        const media = new MediaRecorder(tempStream, { type: mimType })
        mediaRecorder.current = media

        mediaRecorder.current.start()
        let localAudioChunks = []
        mediaRecorder.current.ondataavailable = (event) =>  {
            if (typeof event.data == 'undefined') { return }
            if (event.data.size === '0') { return }
            localAudioChunks.push(event.data)
        }
        setAudioChunks(localAudioChunks)
    }

    async function stopRecording() {
        setRecordingStatus('inactive')
        console.log('Stop Recording')

        mediaRecorder.current.stop()
        mediaRecorder.current.onstop = () => {
            const audioBlob = new Blob(audioChunks, {type: mimeType})
            setAudioStream(audioBlob)
            setAudioChunks([])
        }
    }


    useEffect(() => {
        if (recordingStatus === 'inactive') {return}

        const interval = setInterval(() => {
            setDuration(curr => curr + 1)
        }, 1000)

        return () => clearInterval(interval)

    })






    return(
    <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center pb-20'>
   <h1 className= 'font-semibold text-7xl sm:text-8xlmd: text-9xl'>text<span className='text-purple-900 bold'>ify</span></h1>
   <h3 className="font-semibold text-2xl">Record <span className='text-purple-900'>&rarr;</span> Transcribe<span className='text-purple-900'>&rarr;</span>Translate</h3>
   <button className="flex specialBtn px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4 text-xl">
    <p className = 'text-purple-900'>Record</p>
    <i className="fa-solid fa-microphone"></i>
   </button>
   <p className='text-base'>Or <label className="text-purple cursor-pointer hover:text-purple-600 duration-200">Upload <input onChange={(e) => { const tempFile = e.target.files[0]; setFile(tempFile)

   }} className="hidden" type='file'accept='.mp3,.wave'/></label> a mp3 file</p>
   <p className='italic text-slate-500'>Real-time Audio Transcription & Translation</p>

    </main>
)
}