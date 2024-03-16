import React from 'react'

const Song = () => {
    const data = [
        {name:"Hey Ram",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla?"},
        {name:"Radhe Radhe",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla?"},
        {name:"Kali Kamliwala",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla?"},

    ];

    const handleClickDownload = ()=>{alert("Chal Raha Hai")};

  return (

    <div className='w-full h-screen flex items-center gap-10 justify-center bg-zinc-300'>
        {data.map((elem,index)=>{
               return(
                <div className='w-90 px-3 py-2 bg-white rounded-md'>
                <h3 className='text-xl font-semibold'>{elem.name}</h3>
                <p className='text-xs mt-2'>{elem.description}</p>
                <button onClick={handleClickDownload} className='px-3 py-1 mt-2 text-sm font-semibold rounded bg-yellow-300'>Download Now</button>
               </div>
               ) 
        })} 
    </div>
  )
}

export default Song