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
import Notfound from './Pages/Notfound/Notfound';
import Teste from './Pages/Teste/index';

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
    path:"Teste",
    component:<Teste />
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
