import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='bg-indigo-600 text-white flex justify-between items-center md:py-4 pt-4 pb-12'>
            <div onClick={() => setOpen(!open)} className="h-8 w-8 text-white-500 md:hidden ml-5">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            <h1 className='md:text-5xl text-3xl font-extrabold text-yellow-500  md:ml-14 md:mr-0 mr-5'>ZERO<span className='text-red-600'>1</span></h1>
            <div className={`md:static md:ml-0 ml-5 md:mt-0 mt-20 absolute duration-500 ease-in-out ${open ? 'left-2' : '-left-96'}`}>
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