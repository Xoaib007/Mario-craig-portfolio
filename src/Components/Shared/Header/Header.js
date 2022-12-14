import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { authContext } from '../../../Context/AuthProvider';
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const { user, logOut } = useContext(authContext)

    const [currentUser, setCurrentUser] = useState(null);

    console.log(currentUser);
    useEffect(() => {
        if (user?.email) {
            fetch(`https://mario-craig-server.vercel.app/users/${user?.email}`).then(res => res.json()).then(data => {
                setCurrentUser(data)
            })
        }
    }, [user?.email])

    return (
        <div>
            <div id='nav' className="navbar bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 semi-bold bg-black">
                            <li className=' text-left mb-2'><NavLink activeClassName="active" to='/'>Home</NavLink></li>
                            <li className=' text-left mb-2'><NavLink activeClassName="active" to='/programs'>Programs</NavLink></li>
                            <li className=' text-left mb-2'><NavLink activeClassName="active" to='/blog'>Blog</NavLink></li>
                            {
                                user?.uid ?
                                    <>
                                        {
                                            currentUser?.role === 'admin' ?
                                                <>
                                                    <li className=' text-left mb-2'><button className='hover:text-orange-600 hover:text-xl ml-5 mr-8'><NavLink activeClassName="active" to='/addprogram'>Add Programms</NavLink></button></li>


                                                    <li className=' text-left mb-2'><button className='btn btn-outline mr-5 text-white border-orange-400 hover:text-orange-600' onClick={logOut}>Sign Out</button></li>
                                                </>
                                                :
                                                <>
                                                    <li className=' text-left mb-2'><button className='hover:text-orange-600 hover:text-xl mx-5'><NavLink activeClassName="active" to='/myreviews'>My Reviews</NavLink></button></li>

                                                    <li className=' text-left mb-2'><button className='btn btn-outline mr-5 text-white border-orange-400 hover:text-orange-600' onClick={logOut}>Sign Out</button></li>
                                                </>
                                        }
                                    </>
                                    :
                                    <>
                                        <Link to='/user/signup' className="btn mr-5 text-white  bg-orange-600  hover:text-orange-600">Get started</Link>
                                        <Link to='/user/login' className="btn btn-outline mr-10  text-white border-orange-400 hover:text-orange-600">Log In</Link>
                                    </>

                            }
                        </ul>

                    </div>
                    <Link to='/'><img className='ml-10 mt-5 mb-5 w-20 h-20' src='https://i.ibb.co/162Yp8Z/clipart175587.png' alt=''></img></Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <button className='hover:text-orange-600 hover:text-xl mx-5'><NavLink activeClassName="active" to='/'>Home</NavLink></button>

                        <button className='hover:text-orange-600 hover:text-xl mx-5'><NavLink activeClassName="active" to='/programs'>Programs</NavLink></button>

                        <button className='hover:text-orange-600 hover:text-xl mx-5'><NavLink activeClassName="active" to='/blog'>Blog</NavLink></button>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:block">
                    {
                        user?.uid ?
                            <>
                                {
                                    currentUser?.role === 'admin' ?
                                        <>
                                            <button className='hover:text-orange-600 hover:text-xl ml-5 mr-8'><NavLink activeClassName="active" to='/addprogram'>Add Programms</NavLink></button>

                                            <FontAwesomeIcon className='mr-10 w-3 h-3 border-white p-2 rounded-full border-2' icon={faUser} />

                                            <button className='btn btn-outline mr-5 text-white border-orange-400 hover:text-orange-600' onClick={logOut}>Sign Out</button>
                                        </>
                                        :
                                        <>
                                            <button className='hover:text-orange-600 hover:text-xl mx-5'><NavLink activeClassName="active" to='/myreviews'>My Reviews</NavLink></button>

                                            <FontAwesomeIcon className='mr-10 w-3 h-3 border-white p-2 rounded-full border-2' icon={faUser} />

                                            <button className='btn btn-outline mr-5 text-white border-orange-400 hover:text-orange-600' onClick={logOut}>Sign Out</button>
                                        </>
                                }
                            </>
                            :
                            <>
                                <Link to='/user/signup' className="btn mr-5 text-white  bg-orange-600  hover:text-orange-600">Get started</Link>
                                <Link to='/user/login' className="btn btn-outline mr-10  text-white border-orange-400 hover:text-orange-600">Log In</Link>
                            </>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;