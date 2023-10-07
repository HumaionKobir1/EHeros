import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../page/Home/Home';
import Login from '../page/Login/Login';
import SignUp from '../page/SignUp/SignUp';
import Log from '../layout/Log';
import Reg from '../layout/Reg';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
      ]
    },
    {
      path: "/login",
      element: <Log></Log>,
      children: [
        {
          path: "/login",
          element: <Login></Login>
        }
      ]
    },
    {
      path: "/register",
      element: <Reg></Reg>,
      children: [
        {
          path: "/register",
          element: <SignUp></SignUp>
        }
      ]
    }
  ]);

  export default router