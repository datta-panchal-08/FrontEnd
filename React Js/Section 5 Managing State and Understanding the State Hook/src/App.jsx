import React, { useState } from 'react'

const App = () => {
   let [banned,setBanned] = useState(false);

  return (
    <div className='py-3 px-4'>
    <h1 className='text-2xl mb-2 font-bold'>{banned.toString()}</h1>
    <button onClick={()=>setBanned(!banned)}className='px-3 py-1 text-sm font-semibold text-zinc-100 rounded bg-blue-500'>Change</button>
  </div>
  )
}

export default App