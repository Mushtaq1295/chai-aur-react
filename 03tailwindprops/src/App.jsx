import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='mb-4 bg-blue-400 shadow-sm font-serif text-black p-4 rounded-xl'>Mr.Mushtaq you made it</h1>
      <Card/>
      <Card/>
    </>
  )
}

export default App
