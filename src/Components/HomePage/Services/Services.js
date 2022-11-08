import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    const [programs, setPrograms] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/programs')
        .then(res => res.json())
        .then(data => {
            const partial = data.slice(0,3)
            setPrograms(partial);
        })
    },[])

    return (
        <div className='h-full mt-40'>
            <div className=' text-left pl-10 mt-32 ml-56 border-l-8 border-orange-600'>
                <p className='text-4xl text-orange-400 font-bold '>My fitness programs</p>
                <p className='tex-xl font-semibold mt-5'>I designed my programs for all kind of purpose.<br/>Contact me if you are confused which program to choose.</p>
            </div>
            <div className='grid gap-6 mx-56 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 justify-items-center '>
                {
                    programs.map( program => (
                        <div key={program._id} className="card card-compact w-80 border-amber-500 border-2">
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
            <Link to='/programs'><button className="btn btn-outline btn-warning mt-20 mb-40 hover:text-xl">All Programs</button></Link>
        </div>
    );
};

export default Services;