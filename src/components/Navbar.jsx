import React from 'react'

function Navbar() {
  return (
      
      <nav className='flex flex-col lg:flex-row justify-between my-3 mx-6'>
        <div>
            <h3 className='text-xl font-semibold text-gray-500'>{new Date().toUTCString().slice(0,16) }</h3>
            <h1 className='font-medium text-2xl'>FoodFiesta</h1>
        </div>
        <div>
            <input type="search" 
            name="search" placeholder='Search here' 
            autoComplete='off' 
            className='p-2 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[18vw]'
            />
        </div>
      </nav>
  )
}

export default Navbar