import React, { useContext } from 'react';
import { CartContext } from '../Courses/Courses';

const Cart = () => {
    const cart = useContext(CartContext);
    let quantity = 0;
    let price = 0
    for (const course of cart) {
        quantity += course.quantity;
        price += course.price;
    }

    return (
        <div className='sticky top-0'>
            <h1 className='text-4xl font-bold'>Cart Summary</h1>
            <p>Course Quantity: {quantity}</p>
            <p>Price: {price}</p>
            {
                cart.map(course => {
                    return (
                        <>
                            <p className='text-lg'>{course.name}
                                <button className='bg-red-400 ml-2 px-2 py-1'>X</button>
                            </p>
                        </>
                    )
                })
            }
        </div >
    );
};

export default Cart;