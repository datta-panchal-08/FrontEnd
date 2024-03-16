import { useState } from "react"


const UseStateAdvance = () => {
  const [val,setVal] = useState({name:"Datta" ,isBanned:false});
  return (
    <div className="w-full h-screen px-4 py-7 bg-blue-700">
        <h1 className="text-white text-xl mb-2">name :{val.name} </h1>
        <h1 className="text-white text-xl mb-2">isBanned: {val.isBanned.toString()}</h1>
        <button onClick={()=>setVal({...val,isBanned:!val.isBanned})} className="bg-yellow-400 px-3 rounded-full text-red-600 py-1 font-semibold">Change</button>
    </div>
  )
}

export default UseStateAdvance