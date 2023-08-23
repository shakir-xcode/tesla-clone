import React from 'react'
import { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md';
import './genStyle.css'

function NavDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(prevState => !prevState);
    }

    const drawerMenuItems = ['Existing Inventory', 'Used Inventory', 'Trade-In', 'Demo Drive',
        'Insurance', 'Cybertruck', 'Roadster', 'Semi', 'Charging', 'Commercial Energy', 'Utilities', 'Find Us', 'Support', 'Invester Relations',]
    return (
        <div className=' '>
            <button onClick={toggleDrawer}
                className=' menu-item backdrop-blur-md bg-black/5 lg:bg-transparent lg:backdrop-blur-none rounded'>
                Menu
            </button>

            <div className={`absolute w-full h-screen top-0 ${isOpen ? '-right-0' : '-right-full'} transition-all duration-200 `}>
                <div onClick={toggleDrawer} className='absolute w-full h-screen top-0 left-0 backdrop-blur-sm '></div>
                <div className='absolute top-0 right-0 w-[50%] sm:w-[40%] md:w-[30%] lg:w-[20%] h-screen flex flex-col gap-4
                                             bg-background-white pl-4 pr-3 pt-4 pb-10'>
                    <div onClick={toggleDrawer}
                        className='cursor-pointer text-2xl mt-3 mb-3 ml-auto mr-1 rounded p-[2px] hover:bg-zinc-200/50 hover:transition duration-700'>
                        <MdOutlineClose /></div>

                    <div className=' flex flex-col gap-4 overflow-scroll scrollbar-hide text-[0.94rem] '>
                        {drawerMenuItems.map((menuItem, index) =>
                            <span key={index} className='drawer-menu-item'>{menuItem}</span>
                        )
                        }
                    </div>


                </div>
            </div>

        </div>
    )
}

export default NavDrawer