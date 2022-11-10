import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MyReviews = () => {
    const { user } = useContext(authContext);

    const [myReviews, setMyReviews] = useState([]);
    console.log(myReviews)
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/user/${user?.uid}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.uid])

    const handleDeleteReview = _id =>{
        const proceed = window.confirm('You sure want to delete this review?')
        
        if(proceed){
            fetch(`http://localhost:5000/reviews/id/${_id}`, {
            method: 'DELETE',
            })

            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    alert('Deleted successfully')
                }
                else{
                    alert('Post unsuccessfull. check the given data is correct');
                }
            })
            .catch(error => console.error(error))
        }
        
    }

    return (
        <div className='min-h-screen'>
            <div className='mb-20'>
            {
                myReviews.map(myReviews => (
                    <div key={myReviews._id}>
                        <div className='flex w-6/12 mx-auto justify-between'>
                            <p className=' text-left mb-2 mt-14'>You reviewed <Link to={`../programs/${myReviews.program}`} className='font-bold text-orange-400 hover:text-orange-600'>{myReviews.programName}</Link></p>
                            
                            <div>
                                <button>
                                    <FontAwesomeIcon className='mr-10 w-5 h-5 hover:text-orange-400' icon={faPenToSquare} />
                                </button>
                                <button onClick={() => handleDeleteReview(myReviews._id)}>
                                    <FontAwesomeIcon className='mt-16 w-5 h-5 hover:text-orange-400' icon={faTrashCan} />
                                </button>
                            </div>
                        </div>
                        <p className='bg-gray-900 rounded-lg text-left h-fit w-6/12 mx-auto my-3'>{myReviews.review}</p>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default MyReviews;