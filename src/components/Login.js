import React, { useState } from 'react';
import Header from "./Header";
// react arrow function  component export- rafce
const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }


  return (
    <div>
        <Header/>
        <div className='absolute' >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="logo" />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-xl y-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>
            
            { !isSignInForm && (<input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>)}

            <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>

           

            <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>

            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
            {isSignInForm? "Sign In":"Sign Up"}
                </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already registerd? Sign in now"}</p>

        </form>
       
    </div>
  );
};

export default Login;