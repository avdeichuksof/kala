import './App.css'
import 'animate.css'
import { Suspense, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar/Navbar'

import Info from './routes/Info/Info'
import Index from './routes/Index/Index'
import Catalogo from './routes/Catalogo/Catalogo'

function App() {
  return (
    <div className='grid-container'>
      <BrowserRouter>
        <Navbar className="navbar" />
        <div className='main'>
          <Routes>
            <Route exact path='/' element={<Index />} />
            <Route exact path='/catalogo' element={<Catalogo />} />
            <Route exact path='/catalogo/:cat' element={<Catalogo />} />
            <Route exact path='/info' element={<Info />} />
          </Routes>
          
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;

/* AGREGARLE TRANSICIÓN AL NAVBAR CUANDO SE ABRE */
