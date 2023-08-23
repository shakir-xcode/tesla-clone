import React from 'react'
import { Link } from 'react-scroll';
import './genStyle.css'
import NavDrawer from './NavDrawer'

function Navbar() {
    return (
        <div className=' flex justify-between items-center fixed top-0 w-full font-medium tracking-wide px-4  py-6 z-10  text-primary-color'>
            <div className=' grow  cursor-pointer'>
                <svg className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon w-28" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
            </div>

            <div className=' ml-12 grow justify-end hidden lg:flex flex-wrap '>
                <div className=' pt-1 gap-3'>
                    <Link
                        to="id-model-3"
                        smooth={true}
                        duration={500}
                    ><span className='menu-item'>Model 3</span></Link>
                    <Link
                        to="id-model-x"
                        smooth={true}
                        duration={500}
                    ><span className='menu-item'>Model X</span></Link>
                    <Link
                        to="id-model-y"
                        smooth={true}
                        duration={500}
                    ><span className='menu-item'>Model Y</span></Link>
                    <Link
                        to="id-solar-panels"
                        smooth={true}
                        duration={500}
                    ><span className='menu-item'>Solar Panels</span></Link>
                    <Link
                        to="id-solar-roof"
                        smooth={true}
                        duration={500}
                    ><span className='menu-item'>Solar Roof</span></Link>
                    <Link
                        to="id-accessories"
                        smooth={true}
                        duration={500}
                    > <span className='menu-item'>Powerwall</span></Link>
                </div>

                <div className='ml-auto flex gap-2 '>
                    <span className='menu-item'>Shop</span>
                    <span className='menu-item'>Account</span>

                </div>
            </div>

            <NavDrawer />
        </div >
    )
}

export default Navbar