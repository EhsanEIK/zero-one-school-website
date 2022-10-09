import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, image, name, price } = course;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/course/${id}`);
    }

    return (
        <div className='border-2 rounded-lg relative p-5'>
            <img className='h-2/4 w-full' src={image} alt={name} />
            <p className='text-2xl font-bold'>{name}</p>
            <p>Price: {price}</p>
            <Link className='bg-red-600 text-white text-center font-semibold rounded-lg w-1/2 absolute bottom-15 mt-5 px-4 py-1 hover:bg-red-700' to={`/course/${id}`}>Details Link</Link>
            <button onClick={handleClick} className='bg-sky-600 text-white font-semibold rounded-lg w-1/2 absolute bottom-5 mt-5 px-4 py-1 hover:bg-sky-700'>Details</button>
        </div >
    );
};

export default Course;