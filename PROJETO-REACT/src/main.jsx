import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import Servicos from './routes/Servicos/index.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>, 
    children: [
      {path: "/", element: <Home/>},
      {path: "/produtos", element: <Produtos/>},
      {path: "/servicos", element: <Servicos/>},
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)