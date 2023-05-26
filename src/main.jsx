import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter,Route,Routes,
} from "react-router-dom";
import './index.css'
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import Lesson from "./pages/lesson";
import "./assets/font/Sofia-sans.css"
import "./i18n"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/mentory-page" element={<Home/>}/>
              <Route path="/mentory-page/:lesson" element={<Lesson/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
      </Suspense>
  </React.StrictMode>,
)
