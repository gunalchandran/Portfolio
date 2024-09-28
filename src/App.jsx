import React from 'react'
import Navbar from './component/Navbar/Navbar'
import About from './component/About/About'
import Home from './component/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skills from './component/Skills/Skills';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>  
  )
}

export default App