import React from 'react'
import {Link, Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Agence from './pages/agence'
import Projects from './pages/projects' 


const App = () => {
  return (
    <div className="text-white w-full h-screen flex flex-col items-center justify-center gap-10">



        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/agence' element={<Agence />} />
            <Route path='/projects' element={<Projects />} />

        </Routes>
   
    </div>
  )
}

export default App
