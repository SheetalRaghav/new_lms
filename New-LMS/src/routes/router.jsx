import {
    createBrowserRouter,
  } from "react-router-dom";
import React from 'react'
import Register from '../pages/Register'
import Login from "../pages/Login";
import Main from '../pages/Main'
import Dashboard from "../pages/Dashboard";
import BlockUser from "../components/Admin/BlockUser";
  const router = createBrowserRouter([
    {
        path:'/login',
        element:<Login></Login>
    },
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Dashboard/>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
        {
          path: "block-user",
          element: <BlockUser></BlockUser>,
        },
        
      ],
    }
  ]);
  export default router