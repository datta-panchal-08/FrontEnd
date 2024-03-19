import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from '../utils/Axios';

const Services = () => {
   const [first,setFirst] =useState("This Is Normal Data!");
   const [second,setSecond] =useState("This Is Large Data!");
   
    const getUsers = () =>{
      const api = "/users";
      axios
     .get("/users")
     .then((users) => {
          console.log(users);
        })
     .catch((err) => {
          console.log(err);
        })
    }
   
   useEffect(()=>{
    getUsers();
        console.log("Service Component Creation Is Completed!");

        return ()=>{
            console.log("Service Component Is Deleted!");
        }
    },[])
  return (
    <div>
      <h1>{first}</h1>
      <button onClick={()=>setFirst("Normal Data Has Been Changed!")} className='bg-red-500 text-white text-sm font-semibold rounded px-6 py-1 mt-2 mb-2'>Change Normal Data</button>

      <h1>{second}</h1>
      <button onClick={()=>setSecond("Large Data Has Been Changed!")} className='bg-green-600 text-white text-sm font-semibold rounded px-6 py-1 mt-2 mb-2'>Change Large Data</button>

    </div>
  )
}

export default Services