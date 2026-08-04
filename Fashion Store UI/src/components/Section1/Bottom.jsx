import React from 'react'

const Bottom = () => {
  return (
    <div>
            <div className='flex gap-8 ml-35'>
                <button className='bg-black text-white px-12 py-3 active:scale-95 hover:bg-stone-700'>SHOP NOW</button>
                <button className='text-black text-lg  px-8  rounded active:scale-95 hover:bg-[#D5D5D7]'>
                    EXPLORE NEW IN
                    <hr className="mt-2 w-35 border-black" />
                </button>
                </div>
                <div className='flex  ml-130 -mt-15'>
                  <button className='text-black ml-190 text-lg  px-12 rounded-2xl  active:scale-95 hover:bg-[#D5D5D7] '>
                       NEW
                <br />
                COLLECTION
                <br />
                2026
                    <hr className="mt-2 -w-12 border-black" />
                </button>
            </div>
    </div>
  )
}

export default Bottom
