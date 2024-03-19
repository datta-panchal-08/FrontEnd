import React, { useEffect } from 'react'

const Services = () => {
    useEffect(()=>{
        console.log("Service Component Is Created!");

        return ()=>{
            console.log("Service Component Is Deleted!");
        }
    })
  return (
    <div>Services</div>
  )
}

export default Services