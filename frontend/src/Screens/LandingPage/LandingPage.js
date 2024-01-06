import React from 'react';
import './LandingPage.css';
import background from './../../Images/background.jpg';
const LandingPage = () => {
  return (
      <div className=' h-full w-full'>
        <div className='relative flex items-center justify-center'>
            <img src={background} alt='Background img'/>
            <div className='intro-info absolute text-center'>
                <h1 className=' text-7xl'>Welcome to NoteZipper</h1>
                <p className='text-3xl mt-16'>A cloud based notes.</p>
                <p className='text-3xl'>A safe place for all your notes.</p>
                <div className='buttons mt-20 flex justify-between px-20'>
                <button className='login-btn h-24 w-40 bg-black text-white text-3xl px-4 py-4 rounded-lg hover:underline' >
                    <a href='/'>Login</a>
                </button>
                <button className='signup-btn h-24 w-40 bg-black text-white text-3xl px-4 py-4 rounded-lg hover:underline'>
                    <a href='/'>Sign Up</a>
                </button>
            </div>
            </div>
            
      </div>
    </div>
      
  )
}

export default LandingPage
