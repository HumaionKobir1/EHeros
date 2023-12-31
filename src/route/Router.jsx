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
import PrivateRoute from './PrivateRoute';
import ViewDetails from '../share/ViewDetails/ViewDetails';
import AllEmployees from '../page/AllEmployees/AllEmployees';
import AddEmploy from '../page/AddEmploy/AddEmpoly';


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
          path: 'details/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/employ/${params.id}`)
        },
        {
          path: '/allemploy',
          element: <AllEmployees></AllEmployees>,
          loader: () => fetch('http://localhost:5000/allemploy')
        },
        {
          path: '/addemploy',
          element: <AddEmploy></AddEmploy>
        }
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