import React, { useEffect, useState } from 'react';

const SingleProgramAllReview = (props) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/reviews/${props.program._id}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
            console.log(data)})
    }, [props.program._id])
    return (
        <div>
            <h1>{reviews.length}</h1>
        </div>
    );
};

export default SingleProgramAllReview;