import React from 'react';

const MyMission = () => {
    return (
        <div className='flex flex-row-reverse mt-72 mb-96'>
            <div className='w-1/2'>
                <img className='w-96 mx-auto' src='https://www.rcotterillpt.com/uploads/1/3/4/3/134350959/rcotterill-mission_orig.jpg' alt=''></img>
            </div>
            <div className='w-1/2 relative left-40'>
                <p className='text-orange-400 text-4xl text-right mb-10 font-semibold border-r-8 border-white'>My Mission</p>
                <p className='text-justify'>I love helping people stick with something that they not only get great results from but that they enjoy too. Nowadays, people know that their physical and mental health is worth investing in, recognising the benefits of outsourcing all the management of their health and fitness to a professional. I am 100% committed to helping you build better relationships with food and your own body, while building strength and confidence that will take not just your fitness, but your whole life to the next level.</p>
                <button className='btn bg-orange-400 hover:bg-orange-600 hover:font-extrabold mt-5 w-40 mx-auto'>Contact With Me</button>
            </div>
        </div>
    );
};

export default MyMission;