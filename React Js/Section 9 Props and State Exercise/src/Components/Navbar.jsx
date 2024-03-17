import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='w-full px-3 py-4 flex items-center justify-between'>
          <h3>Orange</h3>
          <div className='bg-orange-500 px-4 py-2 flex items-center justify-center gap-2 rounded-md'>
            <h4 className='text-sm text-white font-semibold '>Favorites</h4>
            <h5 className='text-xs text-white'>{data.filter(item=>item.added).length}</h5>

          </div>

    </div>
  )
}

export default Navbar