import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCalendarDays, faClock } from '@fortawesome/free-regular-svg-icons'
import { faChartLine, faRankingStar, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import SingleProgramAllReview from '../SingleProgramAllReview/SingleProgramAllReview';
import ReviewForm from '../ReviewForm/ReviewForm';

const SingleProgram = () => {
    const program = useLoaderData();
    return (
        <div className='min-h-screen'>
            <Link to='/programs'><FontAwesomeIcon className='flex ml-20 w-10 h-10 hover:text-orange-400' icon={faArrowLeft} /></Link>
            <div className='align w-fit px-4 flex flex-row mx-auto border-x-8 border-white mt-10'>
                <p className=' text-orange-400 text-5xl font-semibold'>{program.namedetail}</p>
                <p className='mx-5'>AKA</p>
                <p className=' text-orange-500 text-5xl font-bold'>{program.name}</p>
            </div>
            <div className='flex flex-row mt-20'>
                <div className='ml-20 mt-10 w-1/3 text-left'>
                    <p className='text-orange-400 text-3xl font-semibold h-fit pl-5 mb-10 text-left border-l-8 border-orange-600'>About</p>
                    <p>{program.details}</p>
                </div>

                <div className='mt-10 ml-20'>
                    <img src={program.img} alt=''></img>
                </div>

                <div className='text-left ml-20 mr-20 mt-10'>
                    <ul>
                        <p className='text-orange-400 text-3xl font-semibold h-fit pr-5 mb-10 text-right border-r-8 border-orange-600'>${program.price}</p>
                        <li>
                            <div className='flex flex-row my-4'>
                                <p className='text-orange-400 h-fit py-0 text-xl font-bold border-l-4 border-orange-600 mr-2'>Rating:</p>
                                <FontAwesomeIcon className='ml-2 w-4 h-4 relative top-2 align' icon={faStar} />
                                <p className=' relative top-1 ml-1'>{program.rating}</p>
                            </div>
                        </li>
                        <li>
                            <div className='flex flex-row my-4'>
                                <p className='text-orange-400 h-fit py-0 text-xl font-bold border-l-4 border-orange-600 mr-2'>Duration:</p>
                                <FontAwesomeIcon className='ml-2 w-4 h-4 relative top-2 align' icon={faCalendarDays} />
                                <p className=' relative top-1 ml-1'>{program.duration} days</p>
                            </div>
                        </li>
                        <li>
                            <div className='flex flex-row my-4'>
                                <p className='text-orange-400 h-fit py-0 text-xl font-bold border-l-4 border-orange-600 mr-2'>Daily:</p>
                                <FontAwesomeIcon className='ml-2 w-4 h-4 relative top-2 align' icon={faClock} />
                                <p className=' relative top-1 ml-1'>minimum {program.daily} minute</p>
                            </div>
                        </li>
                        <li>
                            <div className='flex flex-row my-4'>
                                <p className='text-orange-400 h-fit py-0 text-xl font-bold border-l-4 border-orange-600 mr-2'>Goal:</p>
                                <FontAwesomeIcon className='ml-2 w-5 h-5 relative top-2 align' icon={faChartLine} />
                                <p className=' relative top-1 ml-1'>{program.goals}</p>
                            </div>
                        </li>
                        <li>
                            <div className='flex flex-row my-4'>
                                <p className='text-orange-400 h-fit py-0 text-xl font-bold border-l-4 border-orange-600 mr-2'>Experience:</p>
                                <FontAwesomeIcon className='ml-2 w-5 h-5 relative top-2 align' icon={faRankingStar} />
                                <p className=' relative top-1 ml-1'>{program.experience}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <SingleProgramAllReview program={program}/>
                <ReviewForm program={program}/>
            </div>
        </div>
    );
};

export default SingleProgram;