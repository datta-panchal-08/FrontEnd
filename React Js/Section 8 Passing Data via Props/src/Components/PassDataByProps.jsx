import React from 'react'

const PassDataByProps = ({value,color}) => {
  return (
    
        <button className={`px-4 py-1 m-3 text-white rounded-md ${color}`}>{value}</button>
  )
}

export default PassDataByProps