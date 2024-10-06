import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [len, setLen] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])

  const passGen =useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str+= "0123456789"; //single line if stmt usage
    if(charAllowed) str+= "!@#$%^&*()_+-={}?~`[]";

    for(let i = 1; i <= len; i++){
        let char = Math.floor(Math.random()*str.length+1)
        pass += str.charAt(char)
    }
    setPassword(pass)

  }, [len, numAllowed, charAllowed, setPassword])

  useEffect(() =>{
    passGen();
    }, [len, numAllowed, charAllowed, passGen])


  return (
    <>
      <div className="w-full h-60 mx-auto shadow-md rounded-lg px-10  text-black-500 bg-yellow-400">
        <h1 className='text-slate-950 my-5 text-3xl'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-10">
          <input 
            type="text" 
            value={password}  
            className='outline-none w-full py-1 px-3' 
            placeholder='password'
            ref={passwordRef}
          />
            <button onClick={copyToClipboard} className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>copy</button>
          </div>
          <div className="flex text-lg text-orange-950 gap-10">
            <div className="flex items-center gap-x-2">
              <input 
                type="range"
                min={6}
                max={100}
                value={len}
                className='cursor-pointer'
                onChange={(e) => {setLen(e.target.value)}}
              />
              <label>Length{len}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
               type="checkbox" 
               defaultChecked={numAllowed}
               id='numbInput'
               onChange={(e) => {
                setNumAllowed((prev) => !prev);
               }}
              />
              <label htmlFor='numbInput'>Number</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
               type="checkbox" 
               defaultChecked={charAllowed}
               id='charInput'
               onChange={(e) => {
                setCharAllowed((prev) => !prev);
               }}
              />
              <label htmlFor='charInput'>character</label>
            </div>
          </div>
        </div>
      </>
  )
}

export default App
