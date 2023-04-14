import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
    createBrowserRouter,
    createHashRouter, Link,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import Lesson from "./pages/lesson";


const router = createBrowserRouter([
    {
        path: "/mentory-page",
        element: <Home/>,
    },
    {
        path: "/mentory-page/:lesson" ,
        element: <Lesson/>,
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
  </React.StrictMode>,
)
