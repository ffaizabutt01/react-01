import React from 'react'
import CardContent from './CardContent'

const Cards = (props) => {
    return (
        <div className='flex flex-wrap justify-evenly gap-50 p-10 '>
            {props.writen.map((item, index) => (
                <div className='flex  rounded-2xl h-70 w-80  overflow-hidden transition-all duration-300 hover:-translate-y-8 hover:shadow-4xl ' key={index}>
                    <img
                        className='w-1/2 h-full object-cover'
                        src={item.image}
                        alt={item.title}
                    />
                    <div className='w-1/2 p-6 flex items-center'>
                        <CardContent writen={[item]} /> {/* Sirf ek item bhejna */}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Cards