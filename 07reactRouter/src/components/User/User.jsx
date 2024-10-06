import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
  return (
    <div className='bg-gray-100 w-full h-10'> User: {userid} </div>
  )
}

export default User
