import React from 'react'
import RightCard from './RightCard'

const Right = (props) => {
  return (
    <div className=' py-6  overflow-x-auto flex flex-nowrap gap-9 h-full w-2/3'>
     {props.users.map(function(elem,idx){
      return < RightCard  key={idx}   id={idx} image={elem.image} intro={elem.intro} tag={elem.tag} />
     })}
    </div>
  )
}

export default Right
