import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './view/Home/Home.js'


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <h1>404 Page Not Found</h1>,
  },
])
root.render(<div>
  <RouterProvider router={router} />
 
  </div>);