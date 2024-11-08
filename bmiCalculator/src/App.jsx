import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <>
   <div className='flex justify-center mt-[100px]'>
    <div className='border border-black rounded-lg w-[500px] h-[450px] text-3xl bg-green-500'>
      <div className='mt-[20px] '><h1>BMI</h1></div>
    </div>
    </div>
   </>
  )
}

export default App
