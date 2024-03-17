import React from 'react'
import PassDataByProps from './Components/PassDataByProps'

const App = () => {
  return (
    <div>
      <PassDataByProps value="Know More!" color="bg-green-600"  />
      <PassDataByProps value="Download" color="bg-red-700" />
    </div>
  )
}

export default App