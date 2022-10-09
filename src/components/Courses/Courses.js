import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';

export const CartContext = createContext('');
const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);

    const [cart, setCart] = useState([]);
    const addToCart = course => {
        let newCart = [];
        const exist = cart.find(c => c.id === course.id);
        if (exist) {
            // const rest = cart.filter(c => c.id !== course.id);
            // exist.quantity = exist.quantity + 1;
            // newCart = [...rest, exist];
            alert('This course is already added in cart!')
        }
        else {
            course.quantity = 1;
            newCart = [...cart, course];
            setCart(newCart);
        }
    }

    return (
        <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
            <div className='grid md:grid-cols-3 grid-cols-1 col-span-3 md:m-10 mx-2 gap-5'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                        handleAddToCart={addToCart}></Course>)
                }
            </div>
            <CartContext.Provider value={cart}>
                <div className='cart-container bg-sky-500 text-white w-full md:static fixed bottom-0 p-5'>
                    <Cart></Cart>
                </div>
            </CartContext.Provider>
        </div>
    );
};

export default Courses;