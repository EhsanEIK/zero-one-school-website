import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='bg-indigo-600 text-white md:flex md:justify-between items-center py-4'>
            <div onClick={() => setOpen(!open)} className="h-8 w-8 text-white-500 md:hidden ml-5">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            <h1 className='text-5xl font-extrabold text-yellow-500 text-center md:ml-14 md:mb-0 mb-5'>ZERO<span className='text-red-600'>1</span></h1>
            <div className={`md:block md:ml-0 ml-5 ${open ? 'block' : 'hidden'}`}>
                <NavLink className={({ isActive }) => isActive ? 'bg-red-600 md:mr-3 mr-0 px-2 py-1' : 'md:mr-3 mr-0 px-2 py-1'} to={'/home'}>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-red-600 md:mr-3 mr-0 px-2 py-1' : 'md:mr-3 mr-0 px-2 py-1'} to={'/courses'}>Courses</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-red-600 md:mr-3 mr-0 px-2 py-1' : 'md:mr-3 mr-0 px-2 py-1'} to={'/instructors'}>Instructor</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-red-600 md:mr-3 mr-0 px-2 py-1' : 'md:mr-3 mr-0 px-2 py-1'} to={'/about'}>About</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-red-600 md:mr-3 mr-0 px-2 py-1' : 'md:mr-3 mr-0 px-2 py-1'} to={'/contact'}>Contact</NavLink>
            </div>
        </nav >
    );
};

export default Navbar;