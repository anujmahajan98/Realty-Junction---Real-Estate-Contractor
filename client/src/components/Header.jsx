import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export default function Header() {
    const { currentUser } = useSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
          setSearchTerm(searchTermFromUrl);
        }
    }, [location.search]);

    return (
        <header className='bg-slate-900 shadow-md'>
            <div className='flex justify-between items-center max-w-8xl mx-auto p-5'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
                        <span className='text-green-500'>Realty</span>
                        <span className='text-slate-50'>Junction</span>
                    </h1>
                </Link>
                <form onSubmit={handleSubmit} className='bg-slate-50 p-3 rounded-lg flex item-center'>
                    <input type='text' placeholder='Search ...' className='bg-transparent focus:outline-none w-24 sm:w-64' 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>
                        <FaSearch className="text-slate-700"></FaSearch>
                    </button>
                    
                </form>
                <ul className='flex gap-6 text-slate-50'>
                    <Link to='/'>
                        <li className='hover:text-green-500 transition-colors duration-300 text-sm sm:text-xl'>Home</li>
                    </Link>

                    <Link to='/about-us'>
                        <li className='hover:text-green-500 transition-colors duration-300 text-sm sm:text-xl'>About</li>
                    </Link>
                    <Link to='/profile'>
                        {currentUser ? (
                        <img
                            className='rounded-full h-7 w-7 object-cover'
                            src={currentUser.avatar}
                            alt='profile'
                        />
                        ) : (
                            <li className='hover:text-green-500 transition-colors duration-300 text-sm sm:text-xl'>Sign In</li>
                        )}
                    </Link>

                    <Link to='/sign-in'>

                        
                    </Link>
                </ul>
            </div>
        </header>
    )
}
