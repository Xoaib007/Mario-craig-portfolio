import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faAngleRight, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Programs.css'

const Programs = () => {
    document.title = "program";
    const [programs, setPrograms] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/programs')
            .then(res => res.json())
            .then(data => {
                setPrograms(data);
            })
    }, [])
    return (
        <div>
            <p className='text-4xl text-orange-400 font-bold w-fit border-x-8 px-10 my-28 border-orange-600 mx-auto block'>All Programs</p>

            <div className='grid gap-6 mx-56 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 justify-items-center mb-20'>
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
                                        <p className='text-white text-left'>{program.details.slice(0, 100)+'...'}</p>
                                    </div>
                                    
                                </div>


                                <Link to={`/programs/${program._id}`} className='btn btn-lg bg-transparent border-none hover:bg-transparent hover:text-orange-600 relative left-28 px-0 mx-0 '><FontAwesomeIcon className='h-8 w-8' icon={faAngleRight} /></Link>

                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="tooltip tooltip-primary" data-tip="Add new program">
                <Link to='/addprogram'><FontAwesomeIcon className=' w-10 h-10 mb-5 text-primary' icon={faCirclePlus} /></Link>
            </div>
            
        </div>
    );
};

export default Programs;