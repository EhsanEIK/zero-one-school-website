import React from 'react';

const Error = () => {
    return (
        <div className='bg-red-600 rounded-xl p-20 m-20'>
            <p className='text-center text-white text-4xl'>
                ERROR 404 FOUND !!!
                <br />
                <span className='mt-5 text-xl'>There is no content on this route.</span>
            </p>
        </div>
    );
};

export default Error;