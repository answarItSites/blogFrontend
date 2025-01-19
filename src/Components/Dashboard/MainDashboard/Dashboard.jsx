// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import BlogAdd from '../AllBlogDashboard/BlogAdd';
// import BlogList from '../AllBlogDashboard/BlogList';
// import SignUp from '../../SignUp';
// import Tracking from '../../Tracking';

import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Dashboard = () => {
    return (
        <div>
            <Header/>
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Dashboard; 