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
import Test from './Pages/Test/index';

import Login from './Pages/login';
import Notfound from './Pages/Notfound';
import Home from './Pages/Home/index';

const router =  createBrowserRouter([
  {
    path: "Teste",
    component:<Test />
  },
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
    path: "Home",
    element: <Home />
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
