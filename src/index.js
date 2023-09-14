import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Notes from './Components/Notes';
import Team from './Components/Team';
import Registration from './Components/Registration';
import Home from './Components/Home';
import Login from './Components/Login';
import About from './Components/About';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';
// import Profile from "./Components/Profile";
// import FeeDash from "./Components/FeeDash";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/team',
        element: <Team/>
      },
      {
        path: '/notes',
        element: <Notes/>
      },
      {
        path: '/registration',
        element: <Registration/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/dashboard/*',        // Add * to make parent. 
        element: <Dashboard/>,
      }
    ] 
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


reportWebVitals();
