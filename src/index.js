import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Team from './Components/Team';
import Registration from './Components/Registration';
import Home from './Components/Home';
import Login from './Components/Login';
import About from './Components/About';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';
import NotesPage from "./Components/NotesPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: 'DextereousLearning',
    element: <App/>,
    children: [
      {
        path: '/DextereousLearning/',
        element: <Home/>
      },
      {
        path: '/DextereousLearning/team',
        element: <Team/>
      },
      {
        path: '/DextereousLearning/registration',
        element: <Registration/>
      },
      {
        path: '/DextereousLearning/login',
        element: <Login/>
      },
      {
        path: '/DextereousLearning/about',
        element: <About/>
      },
      {
        path: '/DextereousLearning/contact',
        element: <Contact/>
      },
      {
        path: '/DextereousLearning/Notes/Physics/:sClass',
        element: <NotesPage subject='Physics'/>
      },
      {
        path: '/DextereousLearning/Notes/Chemistry/:sClass',
        element: <NotesPage subject='Chemistry'/>
      },
      {
        path: '/DextereousLearning/Notes/Biology/:sClass',
        element: <NotesPage subject='Biology'/>
      },
      {
        path: '/DextereousLearning/Notes/Math/:sClass',
        element: <NotesPage subject='Math'/>
      },
      {
        path: '/DextereousLearning/dashboard/*',        // Add * to make parent. 
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
