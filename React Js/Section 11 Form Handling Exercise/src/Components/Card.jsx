import React from "react";

const Card = ({user,handleRemove,id}) => {
  return (
    <>
        <div className="w-52 h-full bg-zinc-100 flex flex-col  items-center p-2 rounded-lg">
         <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
           <img
             className="w-full h-full object-cover"
             src={user.image}
             alt=""
           />
         </div>
         <h1 className="mt-1 text-xl font-semibold text-center leading-none">{user.name}</h1>
         <h4 className="mt-1 text-xs opacity-60">{user.email}</h4>
         <p className="mt-2 text-center text-xs font-semibold leading-1 tracking-tight">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
           consequuntur sequi sunt?.
         </p>
         <button onClick={()=>handleRemove(id)} className="bg-red-600 px-4 py-1 font-semibold mt-2 text-sm text-white rounded-md">Remove It</button>
       </div>
    </>   
  );
};
export default Card;
