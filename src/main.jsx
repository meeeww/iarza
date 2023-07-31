import React from 'react'
import ReactDOM from 'react-dom/client'

import Inicio from './pages/Inicio.jsx'
import Contacto from './pages/Contacto.jsx';

import NotFound from './pages/NotFound.jsx';

import './estilos/estilos.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)