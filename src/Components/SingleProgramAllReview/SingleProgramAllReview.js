import React, { useEffect, useState } from 'react';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleProgramAllReview = (props) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${props.program._id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [props.program._id])
    return (
        <div className='mt-40'>
            {
                reviews.map(review => (
                    <div className='w-1/2 mx-auto mb-8'>
                        <div className='flex mb-2'>
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
                            <p className='bg-gray-900 rounded-lg text-left h-fit w-full'>{review.review}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default SingleProgramAllReview;