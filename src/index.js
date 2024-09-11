import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom"

//pages
import App from './App';
import Login from './Pages/login';
import Notfound from './Pages/Notfound';
import Mentoring from './Pages/Mentoring/index';

import Profile from './Pages/Profile';
import Tpage from './Pages/Tpage';
const router =  createBrowserRouter([

  {
    path:"*",
    element:<Notfound />
  },
  {
    path:"/",
    element:<App />,
  },
  {
    path: "Login",
    element:<Login />,
  },
  {
    path: "Mentoring",
    element: <Mentoring />
  },
  {
    path: "Profile",
    element: <Profile  />
  },
  {
    path: "Tpage",
    element: <Tpage />
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
