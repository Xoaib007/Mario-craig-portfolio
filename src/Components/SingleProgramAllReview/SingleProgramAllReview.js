import React from 'react';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';

const SingleProgramAllReview = (props) => {
    

    const { data: reviews = []} = useQuery({
        queryKey: ['booking'],
        queryFn: () => fetch(`https://mario-craig-server.vercel.app/reviews/${props.program._id}`).then(res => res.json())
    })

    return (
        <div className='mt-40 mb-20'>
            <p className='text-2xl text-orange-400 font-bold w-fit border-x-8 px-10 my-28 border-orange-600 mx-auto block'>Reviews</p>
            {
                reviews.map(review => (
                    <div className='w-3/4 lg:w-1/2 mx-auto mb-8'>
                        <div className='flex flex-row mb-2 mt-2'>
                            <FontAwesomeIcon className='w-5 h-5 mt-1 mr-3' icon={faCircleUser} />
                            {
                                review?.userName?
                                <>
                                    <p><span className='text-xl text-orange-400'>{review.userName}</span> reviewed this program</p>
                                </>
                                :
                                <>
                                    <p><span className='text-xl text-orange-400'>Anonymous</span> reviewed this program</p>
                                </>
                            }
                        </div>
                        <div>
                            <p className='bg-gray-900 rounded-lg text-justify p-2 h-fit w-full'>{review.review}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default SingleProgramAllReview;