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


const router = createHashRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/about",
        element: <Header/>,
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header/>
      <RouterProvider router={router} />
      <footer>

      </footer>
  </React.StrictMode>,
)
