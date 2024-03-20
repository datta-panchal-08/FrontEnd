import { useContext } from "react"
import { UserContext } from "../context/Context"
import {  useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {users} = useContext(UserContext);
  console.log(users[id])
  return (
    <div className="flex items-center text-white justify-center mt-20 gap-5 px-5 py-5 bg-red-600 ">
       <h1 className="text-xl font-bold ">Id : {users[id].id}</h1>
       <h1 className="text-xl font-bold ">UserName : { users[id].username}</h1>
       <h1 className="text-xl font-bold ">City : {users[id].city}</h1> 
       <button onClick={()=> navigate(-1)} className="bg-green-500 px-4 py-1 rounded-md font-semibold text-sm ">Go Back</button>
    </div>
  )
}

export default UserDetails