import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Course = ({ course, handleAddToCart }) => {
    const { id, image, name, price } = course;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/course/${id}`);
    }

    return (
        <div className='border-2 rounded-lg h-96 relative p-5'>
            <img className='h-2/4 w-full' src={image} alt={name} />
            <p className='text-2xl font-bold'>{name}</p>
            <p>Price: {price} TK.</p>
            <div className='md:flex items-center gap-2'>
                <Link className='bg-red-600 text-white text-center font-semibold rounded-lg w-1/2 mt-5 px-4 py-1 hover:bg-red-700' to={`/course/${id}`}>Details Link</Link>
                <button onClick={handleClick} className='bg-sky-600 text-white font-semibold rounded-lg w-1/2 mt-5 px-4 py-1 hover:bg-sky-700'>Details</button>
            </div>
            <button onClick={() => handleAddToCart(course)} className='flex justify-center items-center bg-amber-600 text-white font-semibold rounded-lg w-full mt-5 px-4 py-1 hover:bg-amber-700'>
                <p>Add to Cart</p>
                <ShoppingCartIcon className="h-6 w-6 text-white-500 ml-2" />
            </button>
        </div >
    );
};

export default Course;