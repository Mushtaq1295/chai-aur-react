import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white");

    
  return (
      <div className="w-full h-screen duration-1000" 
      style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg  bg-white rounded-3xl px-3 py-2 cursor-pointer border-2 border-black">
          <button onClick={() => setColor('skyblue')} class="bg-sky-500/100 ... ">Blue</button>
          <button onClick={() => setColor('red')} class="bg-red-500/100 ...">Red</button>
          <button onClick={() => setColor('green')} class="bg-green-500/100 ...">Green</button>
          <button onClick={() => setColor('yellow')} class="bg-yellow-500/100 ...">Yellove</button>
          <button onClick={() => setColor('pink')} class="bg-pink-500/100 ...">Pink</button>
          <button onClick={() => setColor('violet')} class="bg-violet-500/100 ... ">violet</button>
          <button onClick={() => setColor('indigo')} class="bg-indigo-500/100 ... ">indigo</button>
          <button onClick={() => setColor('orange')} class="bg-orange-500/100 ... ">orange</button>



          </div>
          </div> 
     </div>

  );
}

export default App;
