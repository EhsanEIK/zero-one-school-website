import React from 'react';

const Course = ({ course }) => {
    const { id, image, name, price } = course;
    return (
        <div className='border-2 rounded-lg relative p-5'>
            <img className='h-2/4 w-full' src={image} alt={name} />
            <p className='text-2xl font-bold'>{name}</p>
            <p>Price: {price}</p>
            <div className='flex justify-center'>
                <button className='bg-sky-600 text-white font-semibold rounded-lg w-1/2 absolute bottom-5 mt-5 px-4 py-1 hover:bg-sky-700'>Details</button>
            </div>
        </div >
    );
};

export default Course;