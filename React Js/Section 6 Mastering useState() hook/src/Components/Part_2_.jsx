import React, { useState } from 'react'

const Part_2_ = () => {
    // const [val,setVal] = useState([1,2,3,4,5,6]);
    const [val,setVal] = useState(
              [{name:"Datta",age:22},
              {name:"Sonali",age:20},
              {name:"Ganesh",age:23},
              ]
    );
  return (
    <div className='px-4 py-4'>
        {val.map((item =><div>
          <h1>{item.name}</h1>
          <h3>{item.age}</h3>
        </div>))}
         
         {/* HOW TO DELTE ON ITEM FROM AN ARRAY */}

        {/* <button onClick={()=>setVal((val.filter((item,index)=> index !=2)))} className='bg-red-600 px-4 py-1 rounded-full text-sm mt-2 text-white'>pop</button> */} 

        {/* HOW TO DELETE ITEMS FOR AN ARRAY */}

        {/* <button onClick={()=>setVal=>val.filter((item,index)=> index != val.length-1)} className='bg-red-600 px-4 py-1 rounded-full text-sm mt-2 text-white'>pop</button> */}
    
         {/* REMOVE THOSE NUMBERS WHICH  DIVIDED BY 2 FROM AN ARRAY */}
         {/* <button onClick={()=>setVal(val.filter((item)=> item%2 !==0))} className='bg-red-600 px-4 py-1 rounded-full text-sm mt-2 text-white'>pop</button>  */}
        
         {/* ADDING NEW ELEMENT IN THE ARRAY */}
         {/* <button onClick={()=>setVal([...val,7])} className='bg-red-600 px-4 py-1 rounded-full text-sm mt-2 text-white'>push</button>  */}

         {/* HOW TO CHANGE AN ARRAY OF OBJECTS */}
         <button onClick={()=>setVal(()=>val.map(item=>item.name === "Datta" ?({name:"Datta",age:21}):item))} className='bg-red-600 px-4 py-1 rounded-full text-sm mt-2 text-white'>change</button>
        
    </div>
  )
}

export default Part_2_