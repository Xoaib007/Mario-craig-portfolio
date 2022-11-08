import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header/Header';

const LogInPage = () => {
    return (
        <div className='h-screen bg-black'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LogInPage;