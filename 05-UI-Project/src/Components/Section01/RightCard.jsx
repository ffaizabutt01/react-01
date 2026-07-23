import React from 'react'

const RightCard = (props) => {
    return (
        <div className='h-full   shrink-0 overflow-hidden relative w-72 rounded-4xl'>
            <img className='h-full w-full object-cover ' src={props.image} alt="" />
            <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
                <h2 className='bg-white h-12 w-12 text-xl font-bold rounded-full flex justify-center items-center'>{props.id+1}</h2>
                <div>
                    <p className='text-small leading-6 text-white mb-8'>{props.intro}</p>
                    <div className='flex justify-between'>
                        <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full' >{props.tag}</button>
                        <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RightCard
