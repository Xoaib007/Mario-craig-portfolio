import React, { useContext} from 'react';
import { authContext } from '../../Context/AuthProvider';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const ReviewForm = (props) => {
    const { user } = useContext(authContext);


    const { data: reviews = [], refetch} = useQuery({
        queryKey: ['booking'],
        queryFn: () => fetch(`https://mario-craig-server.vercel.app/reviews/${props.program._id}`).then(res => res.json())
    })

    const handlePost = e => {
        e.preventDefault();
        const form = e.target;
        const review = form.review.value;

        const review1 = {
            reviewId: reviews.length + 1,
            user: user.uid,
            userName: user.displayName,
            program: props.program._id,
            programName: props.program.namedetail,
            programName2: props.program.name,
            review: review
        }

        fetch('https://mario-craig-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review1)
        })

            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Review posted successfully');
                    form.reset();
                    refetch()
                }
                else {
                    toast('review unsuccessfull. check the given data is correct');
                    form.reset();
                    refetch()
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='mx-auto mb-20'>
            <div className='align w-fit pr-4 flex flex-row mx-auto border-r-8 border-white mt-10 lg:relative lg:right-36 top-8'>
                <p className='text-orange-400 text-2xl font-semibold'>Write Your Review About This Program</p>
            </div>
            <Form onSubmit={handlePost} className='flex flex-col'>
                <FontAwesomeIcon className='w-10 h-10 relative left-80 top-14 hidden lg:block' icon={faCircleUser} />
                {
                    user?.uid ?
                        <>
                            <textarea name='review' className="textarea textarea-primary bg-transparent mx-auto mt-56 w-3/4 lg:w-1/2 h-56 lg:mx-auto" placeholder="Write Your Review" required />
                        </>
                        :
                        <>
                        <div className='border-blue-900 border-2 rounded-lg bg-transparent w-1/2 h-56 mx-auto'>
                            <p className='relative top-1/2 mx-auto'>You are not logged in. <Link to='../../user/login' className='border-b-2 text-orange-400 hover:text-orange-600 border-orange-700'>Log in here</Link> to create a review for this program.</p>
                        </div>
                            
                        </>
                }

                <div className="form-control w-1/2 lg:w-1/12 mx-auto mt-3 lg:relative lg:left-80">
                    <input type='submit' value='Post' className="btn btn-primary hover:bg-orange-600 hover:font-bold hover:text-xl hover:border-tranparent" />
                </div>
            </Form>
        </div>
    );
};

export default ReviewForm;