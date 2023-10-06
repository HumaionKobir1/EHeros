import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import "./Navbar.css";


import ehero from '../../assets/images/ehero.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    

    return (
        <div className='bg-[#eaeaeb]'>
        <div className='container mx-auto p-4'>
            <div className='relative flex items-center justify-between navbar'>
                {/* Logo Section */}
                <Link to='/' className='inline-flex items-center'>
                    <img className='w-24 md:w-32' src={ehero} alt="" />
                </Link>

                {/* Nav Items Section */}
                <ul className='items-center hidden space-x-8 lg:flex text-lg'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>Employ</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                {/* <li>
                    <NavLink
                    to='/login'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                    Login
                    </NavLink>
                </li> */}
                
                </ul>

                <div className='flex justify-center items-center gap-3 '>
                    <Link to='/login' className='inline-flex font-semibold rounded-xl border-2 hover:border-[#03e9f4] bg-[#77153db2] text-white uppercase border-[#77153db2] md:block items-center'>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Log In
                    </a>
                    </Link>
                </div>

                {/* Mobile Navbar Section */}
                <div className='lg:hidden '>
                {/* Dropdown Open Button */}
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Bars3Icon className='w-5 text-gray-500' />
                </button>
                {isMenuOpen && (
                    <div className='absolute top-15 left-3 w-full z-50 '>
                    <div className='p-5 bg-[#77153db2] text-white border rounded shadow-sm'>
                        {/* Logo & Button section */}
                        <div className='flex items-center justify-between mb-4'>
                        <div>
                            <Link to='/' className='inline-flex items-center'>
                                <img src='' alt="" />
                            </Link>
                        </div>
                        {/* Dropdown menu close button */}
                        <div>
                            <button
                            aria-label='Close Menu'
                            title='Close Menu'
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <XMarkIcon className='w-5 text-white' />
                            </button>
                        </div>
                        </div>
                        {/* Mobile Nav Items Section */}
                        <nav>
                        <ul className='space-y-4 text-white'>
                            <li>
                            <Link to='/' className='default'>
                                Home
                            </Link>
                            </li>
                            <li>
                            <Link
                                to='/Blog'
                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400'
                            >
                                Blog
                            </Link>
                            </li>
                            <li>
                            <Link
                                to='/login'
                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400'
                            >
                                Login
                            </Link>
                            </li>
                        </ul>
                        <Link to='/register' className='inline-flex mt-5 items-center  transition-colors duration-200 hover:text-blue-400'>
                            <button className='btn'>Register</button>
                        </Link>
                        </nav>
                    </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    </div>
    );
};

export default Navbar;