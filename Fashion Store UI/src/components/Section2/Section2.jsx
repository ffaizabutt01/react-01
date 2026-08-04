import React from 'react'
import Cards from './Cards'

const Section2 = (props) => {
  return (
    <div className='bg-black h-100 w-full'>
        
      <Cards writen={props.writen}/>
    </div>
  )
}

export default Section2
