import React from 'react';
import './TopHeader.css';

const TopHeader = () => {
    return (
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
    );
};

export default TopHeader;