import React, { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
const Card = () => {
    const [val,setVal]=useState(false)
  return (
    <div className='w-full h-screen bg-zinc-300 flex items-center justify-center'>
        <div className="relative w-60 h-32 bg-zinc-500 rounded flex overflow-hidden">

            <img className={`shrink-0 w-full transition-transform duration-700 ease-in-out h-full ${val === false ? "-translate-x-[0%]":"-translate-x-[100%]"}  object-cover`} src="https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />


            <img className={`shrink-0 w-full h-full transition-transform ease-in-out duration-700  ${val === false ? "-translate-x-[0%]":"-translate-x-[100%]"} object-cover`} src="https://images.unsplash.com/photo-1710242549854-e65b4dc782f8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            
            <span onClick={()=>setVal(()=>!val)} className='w-8 h-8 rounded-full flex items-center justify-center
             absolute bg-zinc-200 bottom-[5%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <FaLongArrowAltRight size={".7em"}/>
            </span>

        </div>
    </div>
  )
}

export default Card