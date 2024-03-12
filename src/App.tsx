import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'

//custom components
import Gallery from './components/Gallery'

//css
import './App.css'
import Exhibit from './components/Exhibit'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Body><Home /></Body>} />
        <Route path='/projects/this-site' element={<Body><Exhibit /></Body>} />
        <Route path="/projects/gallery" element={<Body><Gallery /></Body>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
