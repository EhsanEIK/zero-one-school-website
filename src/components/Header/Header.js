import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav className='bg-indigo-600 text-white md:flex md:justify-between items-center py-6'>
                <h1 className='text-5xl font-extrabold text-yellow-500 text-center md:ml-14 md:mb-0 mb-5'>ZERO 1</h1>
                <div className='md:ml-0 ml-5'>
                    <NavLink className={({ isActive }) => isActive ? 'bg-red-600 md:mr-3 mr-0 px-2 py-1' : 'md:mr-3 mr-0 px-2 py-1'} to={'/home'}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-red-600 md:mr-3 mr-0 px-2 py-1' : 'md:mr-3 mr-0 px-2 py-1'} to={'/courses'}>Courses</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-red-600 md:mr-3 mr-0 px-2 py-1' : 'md:mr-3 mr-0 px-2 py-1'} to={'/instructors'}>Instructor</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-red-600 md:mr-3 mr-0 px-2 py-1' : 'md:mr-3 mr-0 px-2 py-1'} to={'/about'}>About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-red-600 md:mr-3 mr-0 px-2 py-1' : 'md:mr-3 mr-0 px-2 py-1'} to={'/contact'}>Contact</NavLink>
                </div>
            </nav >
            <section className='top-header flex justify-center items-center'>
                <div className='w-3/4 text-white'>
                    <h1 className='md:text-5xl text-3xl font-bold'>Zero One is the best
                        <span className='text-rose-600'> Educational Institution </span>
                        in the town.
                    </h1>
                    <p className='text-md my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur nihil eaque consequatur id deserunt natus magni fuga autem vel? Vero, eveniet hic. Eius blanditiis laborum eligendi molestias alias natus?</p>
                    <button className='border-2 border-gray-400 rounded-lg text-lg text-white-600 py-1 px-4 hover:bg-slate-500'>Get Enroll</button>
                </div>
            </section>
        </header >
    );
};

export default Header;