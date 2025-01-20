// import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname.split('/').pop();

    return (
        <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
            <h2 className="text-xl font-bold mb-4">Dashboard</h2>
            <nav className="space-y-2">
            <Link 
                    to="sign-up" 
                    className={`block py-2 px-4 rounded hover:bg-gray-700 ${currentPath === 'sign-up' ? 'bg-gray-700' : ''}`}
                >
                    Sign Up
                </Link>
                <Link 
                    to="login" 
                    className={`block py-2 px-4 rounded hover:bg-gray-700 ${currentPath === 'login' ? 'bg-gray-700' : ''}`}
                >
                    Login
                </Link>
                <Link 
                    to="add-blog" 
                    className={`block py-2 px-4 rounded hover:bg-gray-700 ${currentPath === 'add-blog' ? 'bg-gray-700' : ''}`}
                >
                    Add Blog
                </Link>
                <Link 
                    to="blog-list" 
                    className={`block py-2 px-4 rounded hover:bg-gray-700 ${currentPath === 'blog-list' ? 'bg-gray-700' : ''}`}
                >
                    Blog List
                </Link>
                
                <Link 
                    to="tracking" 
                    className={`block py-2 px-4 rounded hover:bg-gray-700 ${currentPath === 'tracking' ? 'bg-gray-700' : ''}`}
                >
                    Tracking
                </Link>

                <Link 
                    to="/" 
                    className={`block py-2 px-4 rounded hover:bg-gray-700 ${currentPath === 'backtohome' ? 'bg-gray-700' : ''}`}
                >
                    Back to Home
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar; 