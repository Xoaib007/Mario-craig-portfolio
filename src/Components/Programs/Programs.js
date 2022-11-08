import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Programs = () => {
    const [programs, setPrograms] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/programs')
        .then(res => res.json())
        .then(data => setPrograms(data))
    },[])
    return (
        <div>
            <div className='grid gap-6 mx-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 justify-items-center '>
                {
                    programs.map( program => (
                        <div key={program._id} className="card card-compact w-80 bg-base-100 border-amber-500 border-2">
                        <figure><img src={program.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{program.name}</h2>
                            <div className="card-actions">
                            <p className='text-2xl text-orange-600 font-bold  text-start'>${program.price}</p>
                            <Link to={`/programs/${program._id}`} className='btn btn-lg bg-transparent'><FontAwesomeIcon icon={faArrowRight} /></Link>
                            </div>
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Programs;