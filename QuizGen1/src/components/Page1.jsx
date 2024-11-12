import React from 'react'
import {useNavigate } from 'react-router-dom'


export default function Page1() {
  const navigate = useNavigate()

  const handleSportsBtn = () =>{
    navigate('/tier1')
  }
  const handleCurrBtn = () =>{
    navigate('/tier1')

  }
  const handleEntertainBtn = () =>{
    navigate('/tier1')  
  }
  const handleHistBtn = () =>{
    navigate('/tier1')
  }
  return (
    <>
    <div className='flex justify-center'>  
        <div className='text-white text-2xl border-[4.5px] border-black rounded-lg w-[900px] h-[60px] px-2 py-2'>Choose one topic among the following</div>
    </div>

        <div onClick={handleSportsBtn} className='text-white text-2xl border-[4.5px] border-black rounded-lg w-[450px] h-[60px] px-2 py-2 bg-pink-400 mr-[200px] mt-[80px] hover:bg-pink-500 cursor-pointer' >Sports</div>
        <div onClick={handleCurrBtn} className='text-white text-2xl border-[4.5px] border-black rounded-lg w-[450px] h-[60px] px-2 py-2 bg-yellow-400 mr-[200px]  mt-[50px]  hover:bg-yellow-500 cursor-pointer'>Current Affairs</div>
        <div onClick={handleEntertainBtn} className='text-white text-2xl border-[4.5px] border-black rounded-lg w-[450px] h-[60px] px-2 py-2 bg-red-400 mr-[200px]  mt-[50px]  hover:bg-red-500 cursor-pointer'>Entertainment</div>
        <div onClick={handleHistBtn} className='text-white text-2xl border-[4.5px] border-black rounded-lg w-[450px] h-[60px] px-2 py-2 bg-blue-400 mr-[200px]  mt-[50px]  hover:bg-blue-500 cursor-pointer'>History</div>
 

       
        </>
  );
}
