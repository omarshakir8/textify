import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-4 p-4'>
    <a href= "/"></a><h1 className= 'text-2xl'>text<span className='text-purple-900 bold'>ify</span></h1>
    <a href="/" className='flex items-center gap-2 text-xl specialBtn px-4 py-2 rounded-lg text-purple-900'>
      <p>New</p>
      <i className= "fa-solid fa-plus"></i>
    </a>
  </header>
  )
} 
