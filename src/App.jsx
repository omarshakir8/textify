import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col p-4 max-w-[1000px]mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <header className='flex items-center justify-between gap-4 p-4'>
          <h3 className= 'text-2xl'>text<span className='text-purple-900'>ify</span></h3>
          <button className='flex items-center gap-2'>
            <p>New</p>
            <i className= "fa-solid fa-plus"></i>
          </button>
        </header>
        <main className='flex-1 bg-yellow-200 p-4 flex flex-col justify-center'>

          </main>

      </section>
      <h1 className='text-green-400'>hello there!</h1>
      <footer></footer>

    </div>
  )
}

export default App
