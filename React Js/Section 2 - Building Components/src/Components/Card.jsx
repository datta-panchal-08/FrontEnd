import React from 'react'

const Card = () => {
  return (
   <div className='w-full h-screen bg-zinc-200'>
    <div className='w-52 bg-zinc-100 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden'>
      <div className='w-full h-32 bg-zinc-300 '>
        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='px-3 py-4'>
        <h1 className='font-bold text-center text-xl tracking-tighter'>Amazon Bsics.</h1>
        <p className='font-semibold text-sm w-4/4 text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure voluptatibus possimus?</p>
      </div>
    </div>
   </div>
  )
} 

export default Card;