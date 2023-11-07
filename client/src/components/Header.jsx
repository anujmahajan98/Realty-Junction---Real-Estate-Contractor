import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-900 shadow-md'>
        <div className='flex justify-between items-center max-w-8xl mx-auto p-5'>
            <Link to='/'>
                <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
                    <span className='text-green-500'>Realty</span>
                    <span className='text-slate-50'>Junction</span>
                </h1>
            </Link>
            <form className='bg-slate-50 p-3 rounded-lg flex item-center'>
                <input type='text' placeholder='Search ...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                <FaSearch className="text-slate-700"></FaSearch>
            </form>
            <ul className='flex gap-6 text-slate-50'>
                <Link to='/'>
                    <li className='hover:text-green-500 transition-colors duration-300 text-sm sm:text-xl'>Home</li>
                </Link>

                <Link to='/about-us'>
                    <li className='hover:text-green-500 transition-colors duration-300 text-sm sm:text-xl'>About</li>
                </Link>

                <Link to='/sign-in'>
                    <li className='hover:text-green-500 transition-colors duration-300 text-sm sm:text-xl'>Sign In</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}
