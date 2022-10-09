import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
            <div className='grid md:grid-cols-3 grid-cols-1 col-span-3 md:m-10 mx-2 gap-5'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}></Course>)
                }
            </div>
            <div className='cart-container bg-sky-500 text-white w-full md:static fixed bottom-0 p-5'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Courses;