import './App.css'
import { BrowserRouter/* , Routes, Route  */} from 'react-router-dom'

// components
import Navbar from './components/Navbar/Navbar'
import CategoriesContainer from './components/CategoriesContainer/CategoriesContainer'

function App() {
  return (

    <div className='grid-container'>
      <BrowserRouter>
        <Navbar className="navbar" />
        <div className='main'>
          <CategoriesContainer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
