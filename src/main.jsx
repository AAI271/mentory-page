import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {
    HashRouter,Route,Routes,
} from "react-router-dom";
import './index.css'
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import Lesson from "./pages/lesson";
import "./assets/font/Sofia-sans.css"
import "./i18n"
import LessonMore from "./pages/lesson-more";
import MainLayout from "./layouts/main-layout";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
      <HashRouter>
          <Routes>
              <Route path={"/mentory-page"} element={<MainLayout/>}>
                  <Route path="/mentory-page" element={<Home/>}/>
                  <Route path="/mentory-page/:lesson" element={<Lesson/>}/>
              </Route>
              <Route path="/mentory-page/:lesson/:lessonID" element={<LessonMore/>}/>
          </Routes>
      </HashRouter>
      </Suspense>
  </React.StrictMode>,
)
