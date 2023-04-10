import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
    createHashRouter, Link,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import Lesson from "./pages/lesson";


const router = createHashRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/:about",
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
