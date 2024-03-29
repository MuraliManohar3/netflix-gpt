import { useRef, useState } from 'react';
import Header from "./Header";
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

// react arrow function  component export -  rafce
const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);

    const navigate =useNavigate();

    //creating references  using useRef()
    const name=useRef(null);
    const email    =  useRef(null);
    const password =  useRef(null);

    const handleButtonClick=()=>{
        //validate the form data
        const message=checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return; //error message presen


        //signIn/signUp logic
        if(!isSignInForm) 
        {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // Profile updated!
        // ...
        navigate("/browse");

      }).catch((error) => {
        // An error occurred
        // ...
        setErrorMessage(error.message);
      });
    // ...
  })
  .catch((error)=>{
    const errorCode = error.code;
    const errorMessage= error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });
        }
        else{
            //sign in setsup the cookie and accesToken with which we can communicate with firebase and authenticate it

            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });
        }


    };

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    };
   

  return (
    <div>
        <Header/>
        <div className='absolute' >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="logo" />
        </div>

        <form onSubmit ={(e)=> e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-xl y-4'
            >{isSignInForm? "Sign In":"Sign Up"}</h1>

            { !isSignInForm && (<input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>)}

            <input  ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>

           

            <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>

            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
             {isSignInForm? "Sign In":"Sign Up"}
            </button>

            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already registerd? Sign in now"}</p>

        </form>
    </div>
  );
};

export default Login;