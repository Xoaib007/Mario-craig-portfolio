import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 semi-bold">
                            <li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}>
                                <Link to='' className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                {/* <ul className="p-2 mt-3 shadow bg-base-100 rounded-box w-52 ">
                                    <li><Link to='/user/login'>Log In</Link></li>
                                    <li><Link to='/user/signup'> Sign Up</Link></li>
                                </ul> */}
                            </li>
                            <li><Link>Item 3</Link></li>
                        </ul>
                    </div>
                    <Link to='/'><img className='ml-10 mt-5 mb-5 w-20 h-20' src='https://i.ibb.co/162Yp8Z/clipart175587.png' alt=''></img></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='hover:text-orange-600 hover:text-2xl'><Link to='/'>Home</Link></li>
                        <li className='hover:text-orange-600 hover:text-2xl'><Link to='/programs'>Programs</Link></li>
                        <li className='hover:text-orange-600 hover:text-2xl'><Link to='/services'>My Reviews</Link></li>
                        <li className='hover:text-orange-600 hover:text-2xl'><Link to='/services'>Add Program</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {
                        user?.uid ?
                            <>
                                <Link to='/orders'><FontAwesomeIcon className='hover:text-orange-600 hover:w-8 hover:h-8 w-7 h-7 p-3 mr-10 ' icon={faCartShopping} /></Link>
                                <FontAwesomeIcon className='mr-10 w-5 h-5 border-white p-3 rounded-full border-2' icon={faUser} />
                                <button className='btn btn-outline mr-5 hover:text-orange-600' onClick={logOut}>Sign Out</button>
                            </>
                            :
                            <>
                                <Link to='/user/signup' className="btn btn-outline mr-5 hover:text-orange-600">Get started</Link>
                                <Link to='/user/login' className="btn btn-outline mr-10 hover:text-orange-600">Log In</Link>
                            </>

                    } */}
                </div>
            </div>
        </div>
    );
};

export default Header;