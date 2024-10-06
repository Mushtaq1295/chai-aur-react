import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <center>
        <h1>Welcome to your Ambitious World Mushtaq!!</h1>
      </center>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <MyApp/>
)
 