import React from 'react'

const Card = ({values,handleClick,index}) => {
    const{image,name,profession,friends} = values;
  return (
    <div className='w-52  bg-white overflow-hidden rounded-md '>
        <div className='w-full bg-sky-200 h-40' >
            <img className='w-full h-full object-cover object-top' src={image} alt="" />
        </div>
        <div className='w-full p-3'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <h5 className=' text-xs'>{profession}</h5>
            <button onClick={()=>handleClick(index)} className={`px-3 py-1 mt-4 rounded-md ${friends === true ? "bg-green-500" : "bg-red-600"} font-xs text-white font-semibold`}>{friends === true ? "Friends":"Add Friend"}</button>
        </div>
    </div>
  )
}

export default Card