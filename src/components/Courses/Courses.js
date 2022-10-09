import React, { createContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDB, getDataFromDB, removeCart, removeDataFromDB } from '../../utillities/fakeDB';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext('');

const Courses = () => {
    const courses = useLoaderData();

    // add course to cart
    const [cart, setCart] = useState([]);
    const addToCart = course => {
        let newCart = [];
        const exist = cart.find(c => c.id === course.id);
        if (exist) {
            // const rest = cart.filter(c => c.id !== course.id);
            // exist.quantity = exist.quantity + 1;
            // newCart = [...rest, exist];
            alert('This course is already added in cart!');
        }
        else {
            course.quantity = 1;
            newCart = [...cart, course];
            setCart(newCart);
            addToDB(course.id);
        }
    }

    // remove single course from cart
    const removeCourse = id => {
        const rest = cart.filter(c => c.id !== id);
        setCart(rest);
        removeDataFromDB(id);
    }

    // remove full cart from DB
    const confirmOrder = () => {
        cart.length ? toast.success("Hurrah! Order is on the way.") : toast.error("Please add item first.");
        setCart([]);
        removeCart();
    }

    // loaded cart data from db after 1st loading
    useEffect(() => {
        const storedCart = getDataFromDB();
        const newCart = [];
        for (const id in storedCart) {
            const courseExist = courses.find(course => course.id === id);
            if (courseExist) {
                courseExist.quantity = storedCart[id];
                newCart.push(courseExist);
            }
        }
        setCart(newCart);
    }, [courses]);

    return (
        <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 col-span-3 md:m-10 md:my-20 mt-20 mb-52 mx-2 gap-5'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                        handleAddToCart={addToCart}></Course>)
                }
            </div>
            <CartContext.Provider value={[cart, removeCourse, confirmOrder]}>
                <div className={`bg-sky-500 text-white w-full md:static fixed bottom-12 my-0 p-5 ${cart.length >= 3 ? 'bg-teal-600' : undefined}`}>
                    <Cart></Cart>
                    <ToastContainer />
                </div>
            </CartContext.Provider >
        </div >
    );
};

export default Courses;