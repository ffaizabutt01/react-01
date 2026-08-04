import React from 'react'

const TopBar = () => {
  return (
    <div className=' h-8 w-full bg-black text-white text-xs'>
      <div className=' flex justify-between item-center   '>
        <p className='  mt-2 ml-5'>FREE DELIVERY ON ORDERS ABOVE $999 </p>
        <div className='flex justify-evenly   gap-4 mr-8 mt-2 '>
          <button className='rounded-2xl hover:bg-gray-300 active:scale-95 text-black bg-[#f5f0eb]  w-28 '>DOWNLOAD APP </button>
          <button className='rounded-2xl hover:bg-gray-300 active:scale-95 text-black bg-[#f5f0eb]  w-29' >TRACK ORDER </button>
          <button className='rounded-2xl hover:bg-gray-300 active:scale-95 text-black bg-[#f5f0eb]  w-13'>HELP</button>
        </div>

      </div>
    </div>
  )
}

export default TopBar
