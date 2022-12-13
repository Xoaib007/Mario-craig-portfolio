import React from 'react';

const Introduction = () => {
    return (
        <div className='h-full pt-24 lg:ml-20 mb-20 lg:mb-44 lg:px-16 lg:flex'>
            <div className="h-96  carousel carousel-vertical rounded-box ml-10 lg:ml-28">
                <div className="carousel-item h-full">
                    <img src="https://i.ibb.co/wS7LBF9/Screenshot-20221107-232459-Instagram.jpg" alt='' />
                </div>
                <div className="carousel-item h-full">
                    <img src="https://i.ibb.co/wzTSjdG/Screenshot-20221107-232448-Instagram.jpg" alt='' />
                </div>
            </div>
            <div className='text-left mt-16 ml-10'>
                <div className='pl-10 border-l-8 border-orange-600'>
                    <h3 className='text-2xl text-orange-400'>Hi! I am</h3>
                    <h1 className='text-5xl text-orange-400'>Mario Craig</h1>
                </div>

                <p className='text-xl mt-5'>A personal fitness trainer with 6 trainer degree and 8 years of experience.<br />  Whether you’re looking to simply get healthier or get into a specific fitness <br />activity,  I will match you with a one-on-one training program which can be <br />customized each session  to meet your fitness goals.</p>
            </div>
        </div>
    );
};

export default Introduction;