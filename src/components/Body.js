import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from "react-router-dom";

const Body = () => {
  //always use this useDipatch at first in a component
  // const dispatch = useDispatch();
  // const navigate= useNavigate();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />,
    }

  ]);



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;