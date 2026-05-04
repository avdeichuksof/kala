import './App.css'
import 'animate.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

// components
import Navbar from './components/Navbar/Navbar'
import Toast from './components/Toast/Toast'

// routes
import Index from './routes/Index/Index'
import Catalogo from './routes/Catalogo/Catalogo'

function App() {
  return (
    <CartProvider>
      <div className='grid-container'>
        <BrowserRouter>
          <Navbar className="navbar" />
          <div className='main'>
            <Routes>
              <Route exact path='/' element={<Index />} />
              <Route exact path='/catalogo' element={<Catalogo />} />
              <Route exact path='/catalogo/:cat' element={<Catalogo />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Toast />
      </div>
    </CartProvider>
  )
}

export default App;