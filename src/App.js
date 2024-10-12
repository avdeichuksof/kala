import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar/Navbar'

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
          </Routes>
          
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;

/* AGREGARLE TRANSICIÓN AL NAVBAR CUANDO SE ABRE */
