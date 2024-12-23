import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Mushtaq1295')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-400 text-white'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git" className=' ' />
    </div>
  )
}

export default Github
