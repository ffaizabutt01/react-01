import React from 'react'
import { Truck } from 'lucide-react'

const Bottom = (props) => {
  return (
    <div className='bg-[#C8C9CC] h-[200px] w-full flex items-center gap-26'>
      
         {props.user.map((item, index) => (
          <div className="flex  items-center gap-3 ml-20" key={index}>
        <span className="text-2xl">{item.Sign}</span>

       <div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
          </div>
        ))}
      
    </div>
  )
}

export default Bottom
