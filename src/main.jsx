import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Product from './Pages/Product.jsx'
import Shop from './Pages/Shop.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/Home' element={<Home/>} />
      <Route path='/Shop' element={<Shop/>} />
      <Route path='/Signup' element={<Signup/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Product/:id' element={<Product/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);