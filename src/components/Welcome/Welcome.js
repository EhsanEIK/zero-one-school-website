import React from 'react';
import { AcademicCapIcon, LightBulbIcon, BuildingLibraryIcon, CpuChipIcon } from '@heroicons/react/24/solid';

const Welcome = () => {
    return (
        <section className='my-20'>
            <div className='flex justify-center mb-24'>
                <div className='text-center md:w-2/4 md:m-0 mx-2'>
                    <h1 className='text-4xl font-bold mb-4'>Welcome To
                        <span className='text-amber-600 ml-2'>Zero</span>
                        <span className='text-red-600'>One </span>
                        School
                    </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, doloremque repudiandae beatae facere vel tenetur iusto incidunt, possimus mollitia ipsam expedita omnis nobis voluptas. Tempore quo maxime minus molestias libero.</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:m-0 m-5'>
                <div className='border-2 shadow-lg text-center rounded-lg p-5'>
                    <div className='flex justify-center'>
                        <AcademicCapIcon className="h-16 w-16 text-sky-600 my-4" />
                    </div>
                    <p className='text-2xl font-bold'>Facility of Scholarship</p>
                    <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur repudiandae odio hic iste est provident possimus enim autem et.</p>
                </div>
                <div className='border-2 shadow-lg text-center rounded-lg p-5'>
                    <div className='flex justify-center'>
                        <LightBulbIcon className="h-16 w-16 text-sky-600 my-4" />
                    </div>
                    <p className='text-2xl font-bold'>Learn Effectively</p>
                    <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur repudiandae odio hic iste est provident possimus enim autem et.</p>
                </div>
                <div className='border-2 shadow-lg text-center rounded-lg p-5'>
                    <div className='flex justify-center'>
                        <BuildingLibraryIcon className="h-16 w-16 text-sky-600 my-4" />
                    </div>
                    <p className='text-2xl font-bold'>Glorious Environment</p>
                    <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur repudiandae odio hic iste est provident possimus enim autem et.</p>
                </div>
                <div className='border-2 shadow-lg text-center rounded-lg p-5'>
                    <div className='flex justify-center'>
                        <CpuChipIcon className="h-16 w-16 text-sky-600 my-4" />
                    </div>
                    <p className='text-2xl font-bold'>Research Facility</p>
                    <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur repudiandae odio hic iste est provident possimus enim autem et.</p>
                </div>
            </div>
        </section>
    );
};

export default Welcome;