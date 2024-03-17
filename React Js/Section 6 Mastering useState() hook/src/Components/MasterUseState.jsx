import React, { useState } from 'react'

const MasterUseState = () => {
    const [val,setVal] = useState({name:"Datta",isBanned:false});
  return (
      <div className='w-full h-screen bg-sky-500 px-4 py-4' >
         <h1 className='text-xl font-bold  '>Name: {val.name}</h1>
         <h1 className='text-xl font-bold '>isBanned : {val.isBanned.toString()}</h1>
         <button onClick={()=>setVal({...val , isBanned:!val.isBanned})} className={`${!val.isBanned ? "bg-red-700" : "bg-green-700"} text-white font-bold rounded-full mt-2 px-3 py-1 `}>Change</button>
      </div>
  )
}

export default MasterUseState;