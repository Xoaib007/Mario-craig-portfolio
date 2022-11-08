import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';

const LogIn = () => {
    const { signin } = useContext(authContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signin(email, password)
            .then(result => {
                const user = result.user;
                alert('Youre successfully logged in')
                form.reset();

                const currentUser = {
                    email: user.email
                }

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })


                // navigate(from, {replace : true})
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='flex'>
            <div className="hero w-full ml-64 mt-32 ">
                <form onSubmit={handleLogin} className="py-10 card flex-shrink-0 w-full max-w-sm shadow-2xl bottom-20">
                    <div className="card-body">
                        <h1 className=' text-center text-4xl text-orange-400 font-bold px-10 ml-10 border-x-8 w-fit border-orange-600'>Log In</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" defaultValue={''} />
                            <label className="label">
                                <Link to='#' className="label-text-alt link link-hover text-white">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value='login' className="btn btn-primary" />
                        </div>
                    </div>
                    <p>New to Genius Car? <Link className='text-orange-600 font-bold' to='/user/signup'>Sign Up </Link></p>
                </form>
            </div>
            <img className='w-6/12' src='https://i.ibb.co/0j1HXrd/banner.jpg' alt=''></img>
        </div>
    );
};

export default LogIn;