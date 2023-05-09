import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
    BrowserRouter,
    createBrowserRouter, Route,Routes,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import Lesson from "./pages/lesson";
import "./assets/font/Sofia-sans.css"


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
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/mentory-page" element={<Home/>}/>
              <Route path="/mentory-page/:lesson" element={<Lesson/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
  </React.StrictMode>,
)
