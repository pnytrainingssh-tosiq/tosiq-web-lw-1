import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* https://youtube.com/ */}
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
