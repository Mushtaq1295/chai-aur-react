import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 0
  const addValue = ()=>{
    counter+=1
    if(counter <= 10){
    setCounter(counter)
    }
    else{
      counter = 10
      setCounter(counter)
    }
  }
  const removeValue = ()=>{
    counter-=1
    if(counter <= 0){
      counter = 0
      setCounter(counter)
      }
      else{
        setCounter(counter)
      }
    
  }

  return (
    <>
      <div>
        <h1>Amazon</h1>
        <h2>This is an ecommerce website</h2>

        <button onClick={addValue}>Add value {counter}</button>
        <br />
        <br />
        <button onClick={removeValue}>Remove value </button>

      </div>
    </>
  )
}

export default App
