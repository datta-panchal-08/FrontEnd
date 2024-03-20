import React, { useContext } from 'react'
import UserDetails from './UserDetails'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/Context'
const User = () => {
  const {users,setUsers} =useContext(UserContext);
  return (
    <div>
       <h1 className='mt-10 font-bold text-3xl'>Users List</h1>
       <div className=' flex flex-col gap-5 mt-10'>
        {users.map((u)=><Link key={u.id} to={`/user/${u.id}`} className=' bg-blue-100  p-3'>
          {u.username}
        </Link>)}
       </div>
    </div>
  )
}

export default User