import React, { useContext } from 'react';
import { CartContext } from '../Courses/Courses';

const Cart = () => {
    const [cart, removeCourse, confirmOrder] = useContext(CartContext);

    let quantity = 0;
    let price = 0
    for (const course of cart) {
        quantity += course.quantity;
        price += course.price;
    }

    return (
        <div className='sticky top-0'>
            <h1 className='text-4xl font-bold'>Cart Summary</h1>
            <div className='text-xl my-5'>
                <p>Quantity: {quantity}</p>
                <p>Price: {price.toFixed(2)} TK.</p>
            </div>
            {
                cart.map(course => {
                    return (
                        <p key={course.id} className='text-lg'>{course.name}
                            <span className='bg-amber-500 text-sm rounded-full mx-3 py-1 px-2'>{course.quantity}</span>
                            <button onClick={() => removeCourse(course.id)} className='bg-red-400 ml-2 px-2 py-1'>X</button>
                        </p>
                    )
                })
            }
            <button onClick={confirmOrder} className='bg-rose-600 text-white font-semibold rounded-lg mt-10 w-full px-4 py-2 hover:bg-rose-700'>Confirm</button>
        </div >
    );
};

export default Cart;