import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import AddPage from './pages/AddPage.tsx'

import NotFoundPage from './pages/NotFoundPage'

import './index.css'




const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <NotFoundPage />,
}, 
{
  path: '/add',
  element: <AddPage />,
  errorElement: <NotFoundPage />,
}]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
