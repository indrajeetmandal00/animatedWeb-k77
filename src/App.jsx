import { Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/home'
import Agence from './pages/agence'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Blogue from './pages/blogue'
import Navbar from './components/navigation/navbar'
import FullScreenNav from './components/navigation/fullScreenNav'


const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="text-white overflow-x-hidden">
      <Navbar setIsNavOpen={setIsNavOpen} />
      <FullScreenNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogue' element={<Blogue />} />

      </Routes>

    </div>
  )
}

export default App
