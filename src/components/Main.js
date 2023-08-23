import React from 'react'
import CarSection from './CarSection';
import { carData } from '../carData';


export const CarElementRefContext = React.createContext();

function Main() {
    let carIndex = 0;

    return (
        <div className=''>
            <div className=' w-full min-h-screen '>
                {carData.map((car, index) => <CarSection key={index} carIndex={carIndex++} car={car} />)}
            </div>
        </div>
    )
}

export default Main