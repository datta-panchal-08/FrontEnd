import React from 'react'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const UserDetails = () => {
    const {name} = useParams();
    const navigate = useNavigate();
    const goBackHandler = () =>{
        navigate('/user');
    }
  return (
    <div className=" mt-10 mx-auto w-1/2 p-4">
    <h1 className="text-5xl mb-4  font-bold">User Details</h1>
     <h1 className='text-3xl font-semibold'>How Are You Mr ! {name}</h1>
    <button onClick={goBackHandler} className="bg-blue-500 mt-2 text-white text-sm font-semibold px-4 py-1 rounded-md">
     Go Back
    </button>
  </div>
  )
}

export default UserDetails