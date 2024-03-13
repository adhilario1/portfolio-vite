//import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

//custom components
import Body from './components/Body'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Exhibit from './components/Exhibit'
import Games from './components/Games'
import GamePage from './components/GamePage'
import About from './components/About'
import Guestbook from './components/GuestBook'
import Contact from './components/Contact'
import Test from './components/test'
import AdminLogin from './components/AdminLogin'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

import useWindowDimensions from './components/code/WindowDimensions'

//css
import './components/css/App.css'


const breakpoint=685;

function App() {
  const {height, width} = useWindowDimensions();

  var device;
  if (height && width < breakpoint) {
    device = "handheld";
  } else {
    device = "desktop";
  }

  return (
    <div>
    <div className={`background ${device}`} />
   
      <Routes>
        <Route path='/' element={<Body><Home breakpoint={breakpoint}/></Body>} />
        <Route path='/projects/this-site' element={<Body><Exhibit breakpoint={breakpoint} /></Body>} />
        <Route path="/projects/gallery" element={<Body><Gallery breakpoint={breakpoint}/></Body>} />
        <Route          
          path="/games/"
          element={<Body><Games breakpoint={breakpoint} /></Body>}
        />              
        <Route 
          path='/games/:id'
          element={<GamePage breakpoint={breakpoint} />}
        />

        <Route
          path='/about/'
            element={<Body><About breakpoint={breakpoint}/></Body>}
        />
        <Route  
          path="/guestbook/"
          element={<Body><Guestbook breakpoint={breakpoint}/></Body>}
        />
        <Route     
          path="/contact/email/"
          element={<Body><Contact breakpoint={breakpoint}/></Body>}
        />
        <Route
          path='/test/'
          element={<Body><Test /></Body>} 
        />
        <Route
          path='/admin/'
          element={<Body><AdminLogin /></Body>} 
        />
        <Route 
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </ div>
  )
}

export default App
