import React from 'react';
import frontEnd from '../../images/front-end.jpg';
import backEnd from '../../images/back-end.jpg';

const News = () => {
    return (
        <section className='my-32'>
            <div className='flex justify-center mb-20'>
                <div className='text-center md:w-2/4 md:m-0 mx-2'>
                    <h1 className='text-4xl font-bold mb-4'>Recent News</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, doloremque repudiandae beatae facere vel tenetur iusto incidunt.</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:m-0 m-5'>
                <div className='border-2 shadow-lg text-center rounded-lg p-5'>
                    <img className='h-40 w-full' src={frontEnd} alt="" />
                    <p className='text-xl font-bold mt-5'>How to become e Front-End Developer</p>
                    <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur repudiandae odio hic iste est provident possimus enim autem et.</p>
                </div>
                <div className='border-2 shadow-lg text-center rounded-lg p-5'>
                    <img className='h-40 w-full' src={backEnd} alt="" />
                    <p className='text-xl font-bold mt-5'>How to become e Back-End Developer</p>
                    <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur repudiandae odio hic iste est provident possimus enim autem et.</p>
                </div>
                <div className='border-2 shadow-lg text-center rounded-lg p-5'>
                    <img className='h-40 w-full' src={frontEnd} alt="" />
                    <p className='text-xl font-bold mt-5'>How to become e Full-Stack Developer</p>
                    <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur repudiandae odio hic iste est provident possimus enim autem et.</p>
                </div>
            </div>
        </section>
    );
};

export default News;