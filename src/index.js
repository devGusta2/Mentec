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
import Mentorships from './Pages/Mentorships/index';
import Profile from './Pages/Profile';
import Tpage from './Pages/Tpage';
import Contact from './Pages/Contact';
import Cad from './Pages/cadastro'
import Mentoring from './Pages/Mentoring';
import Forum from './Pages/Forum';
import Services from './Pages/Services';
import Home from './Pages/Home';
import Calendar from './Pages/Calendar';
import Mentors from './Pages/Mentors';

import Recovery from './Pages/Recovery';
  

//paginas do professor/mentor
import CreateMentoring from './Pages/Teacher/CreateMentoring';
import MyMentorships from './Pages/Teacher/MyMentorships';
import Teacher from './Pages/Teacher/Index';

const router =  createBrowserRouter([
  {
    path:"*",
    element:<Notfound />
  },
  {
    path: "Mentors",
    element: <Mentors />
  },
  {
    path: "Calendar",
    element: <Calendar />
  },
  {
    path: "Home",
    element: <Home />
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
    path: "Mentorships",
    element: <Mentorships />
  },
  {
    path: "Profile",
    element: <Profile  />
  },
  {
    path: "Mentoring",
    element: <Mentoring />
  },
  {
    path: "Contact",
    element: <Contact />
  },
  {
    path: "Tpage",
    element: <Tpage />
  },
  {
    path: "Forum",
    element: <Forum />
  },
  {
    path:"Services",
    element:<Services />
  },
  {
    path:"/cadastro",
    element:<Cad />
  },
  {
    path:"/Recovery",
    element:<Recovery/>
  },
  // Páginas dos mentores
  {
    path:"CreateMentoring",
    element:<CreateMentoring />
  },
  {
    path:"MyMentorships",
    element:<MyMentorships />
  },
  {
    path:"Teacher",
    element:<Teacher />
  },
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
