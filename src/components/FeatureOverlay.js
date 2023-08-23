import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

function FeatureOverlay({ opacity, car, index }) {

    return (
        <div style={{ opacity: `${opacity}` }} className={` absolute top-[6rem] left-0 right-0 flex flex-col items-center justify-between h-[80vh]`}>
            <div className=' animate-anim-up '>
                <h1 className=' text-[2.4rem] font-semibold text-center mb- text-primary-color'>{car?.title || 'title'}</h1>
                <p className='text-md text-center text-primary-color'>{car?.description || 'description'}</p>
            </div>

            <div className='mt-auto'>
                <div className='flex gap-6 flex-wrap justify-center '>
                    <button onClick={() => { console.log('hello...') }} className=" w-44 sm:w-52 py-1 font-semibold bg-btn-dark text-white rounded animate-anim-right cursor-pointer">{car?.link1}</button>
                    {car?.link2 ? <button className=" w-44 sm:w-52 py-1 font-semibold bg-btn-light rounded animate-anim-left cursor-pointer">{car?.link2}</button>
                        : ''}
                </div>
            </div>
            <div>
                <FiChevronDown className={`text-primary-color in rounded-full hover:bg-[rgb(190,190,190,0.63)]
                  mt-4 animate-anim-down ${index === 0 ? 'block' : 'invisible'}`} size={32} />
            </div>
        </div>

    )
}

export default FeatureOverlay
