import React, { useState } from 'react'

const SetUseStateIntermediate = () => {
      const [val,setVal]= useState(12);
  return (
    <div className='py-3 px-4'>
    <h1 className='text-2xl mb-2 font-bold'>{val}</h1>
    <button onClick={()=>setVal(prev=>prev+1)}className='px-3 py-1 text-sm font-semibold text-zinc-100 rounded bg-blue-500'>Change</button>
  </div> 
  )
}

export default SetUseStateIntermediate