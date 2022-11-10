import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MyReviews = () => {
    document.title = "My reviews";
    const { user } = useContext(authContext);

    const [myReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch(`https://mario-craig-server.vercel.app/reviews/user/${user?.uid}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.uid])

    const handleDeleteReview = _id => {
        const proceed = window.confirm('You sure want to delete this review?')

        if (proceed) {
            fetch(`https://mario-craig-server.vercel.app/reviews/id/${_id}`, {
                method: 'DELETE',
                headers:{   
                 authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })

                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Deleted successfully')
                    }
                    else {
                        alert('Post unsuccessfull. check the given data is correct');
                    }
                })
                .catch(error => console.error(error))
        }

    }

    const handleEditReview = (event, id) =>{
        event.preventDefault();
        const form = event.target;
        const editedReview = form.review.value;

        fetch(`https://mario-craig-server.vercel.app/reviews/id/${id}`, {
             method: 'PATCH',
             headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({review: editedReview}),
            })
            .then(res=> res.json())
            .then(data=> {
                setMyReviews(data)
            })
    }

    return (
        <div className='min-h-screen'>
            <div className='mb-40'>
                {
                    myReviews.map( (myReviews) => (
                        <div key={myReviews._id}>
                            <div className='flex w-6/12 mx-auto justify-between'>
                                <p className=' text-left mb-2 mt-14'>You reviewed <Link to={`../programs/${myReviews.program}`} className='font-bold text-orange-400 hover:text-orange-600'>{myReviews.programName} ({myReviews.programName2})</Link></p>

                                <div>
                                    <button>
                                        <label htmlFor={myReviews._id} className=' cursor-pointer '><FontAwesomeIcon className='mr-10 w-5 h-5 hover:text-orange-400' icon={faPenToSquare}/></label>
                                    </button>
                                    <button onClick={() => handleDeleteReview(myReviews._id)}>
                                        <FontAwesomeIcon className='mt-16 w-5 h-5 hover:text-orange-400' icon={faTrashCan} />
                                    </button>
                                </div>
                            </div>
                            <p className='bg-gray-900 rounded-lg text-left h-fit w-6/12 mx-auto my-3 p-2'>{myReviews.review}</p>

                            {/*------------
                            Modal Body
                            -------------*/}
                            <input type="checkbox" id={myReviews._id} className="modal-toggle" />
                            <form onSubmit={(e)=>handleEditReview(e,myReviews?._id)} className="modal">
                                <div className="modal-box bg-black ">
                                <p className='text-2xl font-bold mb-5 text-left pl-5'>Edit your review:</p>
                                <textarea name='review' className="textarea textarea-primary bg-black w-11/12 h-56 mx-auto" placeholder="Write Your Review" defaultValue={`${myReviews.review}`}required />
                                    <div className="modal-action">
                                        <button type='submit' htmlFor={myReviews._id} className="btn btn-sm relative right-4 bottom-4 bg-orange-400">Done</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    ))
                }
            </div>
            
        </div>
    );
};

export default MyReviews;