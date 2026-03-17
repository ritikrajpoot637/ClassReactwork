import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorOfBlog = () => {

  const navigate=useNavigate();
  return (
    <div>ErrorOfBlog
        <button onClick={()=>{navigate('/')}} className='btn btn-primary'>go back</button>
    </div>
    
  )
}

export default ErrorOfBlog