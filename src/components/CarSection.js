import React from 'react'
import FeatureOverlay from './FeatureOverlay';

function CarSection({ carIndex, car }) {

    return (
        <div id={car.id} data-index={carIndex}
            className={` relative h-screen -z-[100] `}>
            <img className=' h-full w-full object-cover'
                src={car.img} alt='car ' loading='lazy' />

            <FeatureOverlay car={car} index={carIndex} />

        </div>
    )
}

export default CarSection