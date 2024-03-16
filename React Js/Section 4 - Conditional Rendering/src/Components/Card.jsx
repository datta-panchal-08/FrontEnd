import React from 'react'

const Card = () => {
    const arr = [
        {
            image:
              "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Amazon Basics",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure voluptatibus possimus?",
              instock:true
          },
          {
            image:
              "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Daily Objects",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure voluptatibus possimus?",
              instock:false
          },
          {
            image:
              "https://images.unsplash.com/photo-1654573817889-296cad084c97?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Flipkart Basics",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure voluptatibus possimus?",
              instock:true
          },
          {
            image:
              "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Ipad",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure voluptatibus possimus?",
              instock:false
          },
    ]
  return (
    <div className='w-full h-screen bg-sky-300 flex items-center justify-center gap-10 '>
        {arr.map((elem,index)=>{
               return(
                <div className='w-52  bg-white rounded-md overflow-hidden'>
                <div>
                    <img className='object-cover mb-3' src={elem.image} alt="" />
                </div>
                <h1 className='font-bold text-center mb-3  text-xl tracking-tighter'>{elem.name}</h1>
                <p className='font-semibold text-xs text-4/4 text-center mb-1 tracking-tighter'>{elem.description}</p>
                <button className={`tracking-tighter px-4 py-1 ${elem.instock ? "bg-sky-600":"bg-red-600"} rounded-md mt-2 mb-2 ml-16 font-bold text-zinc-100 text-xs`}>{elem.instock ? "In Stock":"Out Of Stock"}</button>
             </div>
               )
        })}
        
    </div>
  )
}

export default Card