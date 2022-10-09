import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { image, name, price, credit, duration } = course;
    return (
        <div className='flex justify-center my-10'>
            <div className='border-2 rounded-lg relative w-2/4 h-2/4 p-5'>
                <img className='h-2/4 w-full' src={image} alt={name} />
                <p className='text-4xl font-bold'>{name}</p>
                <div className='text-xl'>
                    <p>Price: {price}</p>
                    <p>Credit: {credit}</p>
                    <p>Duration: {duration}</p>
                </div>
            </div >
        </div>
    );
};

export default CourseDetails;