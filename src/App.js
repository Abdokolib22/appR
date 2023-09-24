import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './Proj/Layout/Layout'
import Home from './Proj/Home/Home'
import About from './Proj/About/About'
import Portfolio from './Proj/Portfolio/Portfolio'
import Contact from './Proj/Contact/Contact'
let routers =createHashRouter([
  {path:'',element:<Layout/>,children:[
    {path:'',element:<Home/>},
    {path:'/about',element:<About/>},
    {path:'/portfolio',element:<Portfolio/>},
    {path:'/contact',element:<Contact/>},
  ]}
])
export default function App() {
  return <RouterProvider router={routers}></RouterProvider>
}
