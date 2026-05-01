import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Agence from './pages/agence'
import Projects from './pages/projects'
import Navbar from './components/navigation/navbar'


const App = () => {

  return (
    <div className="text-white">
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />

      </Routes>

    </div>
  )
}

export default App
