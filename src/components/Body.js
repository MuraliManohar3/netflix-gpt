import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import {RouterProvider} from "react-router-dom";
import {auth} from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
const Body = () => {
  //always use this useDipatch at first in a component
  const dispatch= useDispatch();
    const appRouter = createBrowserRouter([
        {
        path:"/",
        element: <Login/>
        },
        {
            path:"/browse",
            element:<Browse/>,
        }

]);

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid: uid,email:email,displayName:displayName,photoURL:photoURL}));
      //redirecting user to another page using useNavigate() hook 
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());

    }
  });
},[]);

  return (
    <div>
        <RouterProvider router={appRouter}/>        
    </div>
  );
};

export default Body;