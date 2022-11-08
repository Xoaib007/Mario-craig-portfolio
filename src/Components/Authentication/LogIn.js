import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className=''>
            <img className='w-6/12' src='https://i.ibb.co/0j1HXrd/banner.jpg' alt=''></img>
            <div className="hero w-full">
            <div className="hero-content gap-20 sm:flex-row flex-col h-screen">
               
                <form  className="py-10 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bottom-20">
                    <div className="card-body">
                        <h1 className='text-5xl text-orange-600 font-bold'>Log In</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='#' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value='login' className="btn btn-primary"/>
                        </div>
                    </div>
                    <p>New to Genius Car? <Link className='text-orange-600 font-bold' to='/user/signup'>Sign Up </Link></p>
                </form>
                
            </div>
            </div>
        </div>
    );
};

export default LogIn;