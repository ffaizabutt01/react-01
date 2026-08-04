import React from 'react'
import Bottom from './Bottom'

const Section3 = (props) => {
  return (
    <>
    <div className='bg-[#D5D5D7] bg-[#C8C9CC] py-10 px-5 h-[550px] w-full flex'>
        <div className='flex flex-col '>
                  <h3 className='text-black ml-18 mt-15 '>NEW SEASON</h3>
                  
                  <h1 className='text-black text-8xl ml-16 mt-3 '>NEW <br /> VIBES</h1>
                                    
                    <h3 className='text-black ml-18 mt-5 '>Discover everything <br /> new and now</h3>
                <button className='bg-black text-white p-3 ml-16 mt-5 active:scale-95 hover:bg-gray-900'>EXPLORE COLLECTION</button>

                  </div>

      <img className='  object-cover ml-100   h-[510px]' src="https://i.pinimg.com/736x/23/96/7e/23967eae7ef8a60e4448bbb82377a344.jpg" alt="" />
      </div>
      <Bottom user={props.user} />
      </>
     
      
      
      
          
  )
}

export default Section3
