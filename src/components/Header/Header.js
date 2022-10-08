import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-indigo-600 text-white'>
            <NavLink className={({ isActive }) => isActive ? 'bg-red-600' : undefined} to={'/home'}>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'bg-red-600' : undefined} to={'/courses'}>Courses</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'bg-red-600' : undefined} to={'/instructors'}>Instructor</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'bg-red-600' : undefined} to={'/about'}>About</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'bg-red-600' : undefined} to={'/contact'}>Contact</NavLink>
        </nav >
    );
};

export default Header;