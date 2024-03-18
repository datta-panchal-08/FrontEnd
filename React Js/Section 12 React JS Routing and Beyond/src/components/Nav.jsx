import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-center items-center gap-10 p-4'>
    <NavLink className={(e)=>{
              return[
                e.isActive ? "text-red-400":"",
                e.isActive ? "font-bold":""
              ].join(" ");
    }} to="/">Home</NavLink>
    <NavLink  to="/user">
       {(e)=>{
         return <span className={[
          e.isActive ? "text-red-400":"",
          e.isActive ? "font-bold":"" 
         ].join(" ")}>Home</span>
       }}
    </NavLink>
    <NavLink style={(e)=>{
        return {
          color: e.isActive ? "tomato":'',
          fontWeight: e.isActive ? "bold":""
        }
    }} to="/about">About</NavLink>
   </nav>

  )
}

export default Nav