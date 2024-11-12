import {useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate();

  const handleLocalBtn = () =>{
      navigate('/page1')
  }

  const handleAiBtn = () =>{
      navigate('/page2')
  }

  return (
    <>
      <div>
        <div>
          <img className='mt-[20px] ml-[500px] h-[200px] w-[200px] rounded-[50%] flex justify-center' src='https://t3.ftcdn.net/jpg/03/81/30/16/240_F_381301638_mo8XtnvD4VtKWjNITYhwL3ITRxF4ldaO.jpg' />
        </div>
        <div className='flex justify-center'>
          <div onClick={handleLocalBtn} className='box1 mt-[150px] w-[500px] h-[180px] border border-black rounded-xl bg-orange-300 px-4 py-10 text-3xl hover:bg-orange-400 cursor-pointer'>Create Questions using local storage</div>
          <div onClick={handleAiBtn} className='box2 mt-[150px] ml-[80px] w-[500px] h-[180px] border border-black rounded-xl  bg-orange-300 px-4 py-10 text-3xl hover:bg-orange-400 cursor-pointer'>Create Questions using Artificial intelligence</div>
        </div>

      </div>
    </>
  )
}

export default App
