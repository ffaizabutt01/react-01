import React from 'react'
import { Car, MoveRight } from 'lucide-react'

const CardContent = (props) => {
  return (
    <div className='text-white w-full'>
      <div>
        <p className='font-bold text-2xl'>{props.writen[0].title}</p>
        <p className='font-light text-lg mt-3'>{props.writen[0].description}</p>
        <button className='flex items-center  px-4 py-2 rounded-full hover:bg-gray-500 mt-4 active:scale-95'>
          {props.writen[0].shop} <MoveRight />
        </button>
        <hr className="mt-3 border-gray-300" />
      </div>
    </div>
  )
}

export default CardContent
