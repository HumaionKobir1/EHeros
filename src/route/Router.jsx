import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../page/Home/Home';
import Login from '../page/Login/Login';
import SignUp from '../page/SignUp/SignUp';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router