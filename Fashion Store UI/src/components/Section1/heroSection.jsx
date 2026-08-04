import React from 'react'
import NavBar from './NavBar'
import Bottom from './Bottom'

const HeroSection = () => {
    return (
            <div className='bg-[#959598] h-[950px] w-full '>
           <NavBar/>
            <h1 className='text-black ml-17 text-lg font-light mt-25  '>
                FASHION
                <br />
                THAT MOVES
                <br />
                WITH YOU.
            </h1>
            <hr className="ml-17 w-15 border-black" />
            <div className='text-[400px] flex justify-center items-center -mt-32 font-semibold  transition-all duration-1000 hover:scale-110 hover:tracking-widest'>
                GAZU
            </div>
            <Bottom/>

        </div>
    )
}

export default HeroSection
