// import { MongoSystemError } from 'mongodb'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bgImage from '../images/bg_image4.webp'
import OAuth from '../components/OAuth'

export default function Signup() {

  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })

  }

  const handleFormSubmission = async (e) => {
    e.preventDefault()
    try{
      const response = await fetch('/api/auth/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      if(data.success == false){
        setError(data.message);
        setLoading(false);
        if (data.message.toLowerCase().includes('username:')){
          setError('Username already exists');
        }else if (data.message.toLowerCase().includes('email:')){
          setError('Email already exists');
        }
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    }catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  console.log(formData)

  

  return (

    
    <div
    style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '91vh',
    }}
    >
      <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'> Sign Up</h1>
        <form onSubmit={handleFormSubmission} className='flex flex-col gap-4'>
          <input 
          type='text' placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleInputChanges}
          />

          <input 
          type='email' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleInputChanges}
          />

          <input 
          type='password' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleInputChanges}
          />

          <button
            disabled={loading}
            className='bg-slate-900 hover:scale-105 transition-transform duration-300 hover:bg-green-500 hover:text-black text-white p-3 rounded-lg uppercase'> 
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
          <OAuth/>
        </form>


        <div className='flex gap-2 mt-5'>
          <p>Already have an account ? </p>
          <Link to={"/sign-in"}>
            <span className='text-blue-600'> Sign In </span>
          </Link>
        </div>
        <div className='flex flex-col items-center mt-5'>
          {error && (
              <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md'>
              {error}
              </div>
          )}
        </div>
      </div>
    </div>
  )
}
