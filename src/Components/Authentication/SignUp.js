import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState(null);
    const {createUser} = useContext(authContext)
    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password.length <= 6){
            setError('password must be upto 6 charecter');
            return;
        }
        if(password !== confirm){
            setError('password didnt match ');
            return;
        }

        createUser(email,password)
        .then(result =>{
            const user= result.user;
            alert('Signed Up Successfully')
            form.reset();
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='flex '>
            <div className="hero w-full ml-64 ">
                <form onSubmit={handleSignUp} className=" card flex-shrink-0 w-full max-w-sm bottom-20 mt-20">
                    <div className="card-body">
                    <h1 className=' text-center text-4xl text-orange-400 font-bold px-10 ml-10 border-x-8 w-fit border-orange-600'>Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Your name" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="email" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered text-black" required /></div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Retype Password</span>
                            </label>
                            <input name='confirm' type="password" placeholder="retype your password" className="input input-bordered text-black" required /></div>
                        <p className='text-orange-600 font-bold'>{error}</p>
                        <div className="form-control mt-6">
                            <input type='submit' value='Sign Up' className="btn btn-primary" />
                        </div>
                    </div>
                    <p>Already have an account? <Link className='text-orange-600 font-bold' to='/user/login'>Log In here</Link></p>
                </form>
            </div>
            <img className='w-6/12 h-fit' src='https://i.ibb.co/0j1HXrd/banner.jpg' alt=''></img>
        </div>
    );
};

export default SignUp;