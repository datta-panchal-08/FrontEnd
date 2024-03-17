import React, { useState } from 'react'
import PassDataByProps from './Components/PassDataByProps'
import Card from './Components/Card'

const App = () => {
   const data = [
    {name:"Datta",profession:"Frontend Developer",image:"https://images.unsplash.com/photo-1599847022902-f64cc1ae97fd?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"Param",profession:"Coder",image:"https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"Ganesh",profession:"Backend Developer",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"Hrishi",profession:"Cloud Engineer",image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false}
   ];
    
   const [realdata,setRealData] = useState(data);
   const handleClick = (changingIndex ) =>{
        setRealData((prev)=>{
         return prev.map((item,index)=>{
            if(index === changingIndex){
              return {...item, friends: !item.friends};
            }
            return item;
          })
        })
   }
    
  return (
    <div className='w-full h-screen bg-zinc-500 flex items-center justify-center gap-4'>
              {/* <PassDataByProps value="Know More!" color="bg-green-600"  />
      <PassDataByProps value="Download" color="bg-red-700" /> */}
     {realdata.map((item,index)=>(
          <Card key={index} index={index} handleClick = {handleClick} values={item}    />
     ))}
     
    </div>
   )
}

export default App