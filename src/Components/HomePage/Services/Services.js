import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Services = () => {
    const [programs, setPrograms] = useState([]);
    useEffect(() => {
        fetch('https://mario-craig-server.vercel.app/programs')
            .then(res => res.json())
            .then(data => {
                const partial = data.slice(0, 3);

                setPrograms(partial);
            })
    }, [])

    return (
        <div className='h-full mt-40'>
            <div className=' text-left lg:pl-10 mt-32 lg:ml-56 border-l-8 border-orange-600'>
                <p className='text-4xl text-orange-400 font-bold '>My fitness programs</p>
                <p className='tex-xl font-semibold mt-5'>I designed my programs for all kind of purpose.<br />Contact me if you are confused which program to choose.</p>
            </div>
            <div className='grid gap-6 lg:mx-56 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 justify-items-center mb-20'>
                {
                    programs.map(program => (
                        <div key={program._id} className=" program card card-compact w-80 border-amber-500 border-2">
                            <div>
                                <PhotoProvider speed={() => 800}
                                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                >
                                    <PhotoView src={program.img}>
                                        <img className='card-image' src={program.img} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                            <div className="card-body">
                                <div className='flex flex-col '>
                                    <div className="align flex">
                                        <h2 className="card-title text-2xl font-bold border-2 p-2 border-orange-600">{program.name}</h2>
                                        <p className='text-xl text-center text-orange-600 font-semibold'>${program.price}</p>
                                        <div className='flex'>
                                            <FontAwesomeIcon className='h-6 w-6 relative top-1 pr-2' icon={faStar} />
                                            <p className='text-2xl font-semibold'>{program.rating}</p>
                                        </div>
                                    </div>
                                    <p className='mt-5 text-left text-xl pb-0 w-fit h-fit border-b-2 border-orange-600 font-semibold'>Details</p>
                                    <div>
                                        <p className='text-white text-left'>{program.details.slice(0, 100) + '...'}</p>
                                    </div>

                                </div>


                                <Link to={`/programs/${program._id}`} className='btn btn-lg bg-transparent border-none hover:bg-transparent hover:text-orange-600 relative left-28 px-0 mx-0 '><FontAwesomeIcon className='h-8 w-8' icon={faAngleRight} /></Link>

                            </div>
                        </div>
                    ))
                }
            </div>
            <Link to='/programs'><button className="btn btn-outline btn-warning mt-5 mb-40 hover:text-xl">All Programs</button></Link>

            <PhotoProvider
                speed={() => 800}
                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
            >
                <PhotoView src="/1.jpg">
                    <img src="/1-thumbnail.jpg" alt="" />
                </PhotoView>
            </PhotoProvider>
        </div >
    );
};

export default Services;