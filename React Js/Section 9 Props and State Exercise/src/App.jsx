import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

const App = () => {
  const data = [
    { song:"Agar Tum Mil Jao",artist:"Shreya Ghoshal",image:"https://imgs.search.brave.com/ArDCozfMeI1idn46snkU6hNxojkp70x1UHVVpOaV-SA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d29sZnRyYXAub3Jn/Ly0vbWVkaWEvaW1h/Z2VzbmV3LzI0Zmls/ZW5lL3NocmV5YS1n/aG9zaGFsLWRlc2t0/b3AuanBn",added:false},
    {song:"Daiya Daiya Re " ,artist:" Alka Yagnik",image:"https://imgs.search.brave.com/oZ8IqpCDzkflSDPlgJb1893KxCxvo7DwkIJeBhi5PJQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDUzNTYz/MTcuanBn" ,added:false},
    {song:"Mera Dil" ,artist:"Sonu Nigam",image:"https://imgs.search.brave.com/XZJaGLJ_JjQfX9BHdGP0UUdWU8Lf_6C8No4R6BVxsR4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by81ODIy/MDUxMi5jbXM",added:false},
    {song:"Desi Kalakar",artist:"Honey Singh",image:"https://imgs.search.brave.com/gMWCXOjnPvzqiabvlbnFi7MsaSGd44Z_5nQRaWiu81E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1tSmpaVGN5/TjJVdE56Rm1OeTAw/WlRFd0xXRXpNbUV0/TVRWak5EWmtORFpo/TWpRelhrRXlYa0Zx/Y0dkZVFYVnlOREF6/TkRrME1UUUAuanBn",added:false}  
  ]
  const [songdata,setSongData] = useState(data);
  const handleClick = (index)=>{
    setSongData((prev)=>{
      return prev.map((elem,itemIndex)=>{
             if(itemIndex === index) return {...elem, added : !elem.added};
             return elem;
      })
    })
  }
  return (
    <>
    <div className='w-full h-screen bg-zinc-400'>
       <Navbar data={songdata}/>
       <div className='flex gap-7 px-4 mt-10 flex-wrap'>
           {songdata.map((obj,index)=>(
             <Card data={obj} handleClick ={handleClick} key={index} index ={index}/>
           ) )}
       </div>
      
       </div>
    </>
  )
}

export default App