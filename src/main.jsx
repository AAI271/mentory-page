import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
    createHashRouter, Link,
    RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createHashRouter([
    {
        path: "/",
        element: <div>Hello world!???
            <Link to="/about">about</Link>
        </div>,
    },
    {
        path: "/about",
        element: <div>Hello About!</div>,
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
