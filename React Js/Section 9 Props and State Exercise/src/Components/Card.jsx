import React from 'react'

const Card = ({data,handleClick,index}) => {
    const {song,artist,image,added} = data;
  return (
    <div className='relative w-60 rounded-md pb-8 bg-white flex justify-center gap-3 p-4 mt-10 '>
        <div className='w-20 h-20 bg-orange-500 rounded-md overflow-hidden'>
            <img className='w-full h-full  object-cover object-center' src={image} alt="" />
        </div>
        <div>
        <h1 className='text-sm font-semibold whitespace-nowrap'>{song}</h1>
        <h2 className='text-xs'>{artist}</h2>
        </div>
        <button onClick={()=>handleClick(index)} className={`px-4 absolute py-2 bottom-[-10%] left-1/2 whitespace-nowrap -translate-x-[50%] rounded-full text-xs text-white  ${added === true ? "bg-green-500":"bg-orange-500"} `}>{added === false ? "Add To Favorites" :"Added"}</button>
    </div>
  )
}

export default Card