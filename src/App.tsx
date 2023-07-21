import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Store from './Pages/Store'
import {
   Routes,Route
} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { ShoppingCartProvider } from './Content/ShoppingCartContext'
function App() {
 

  return (
  <ShoppingCartProvider>
<Navbar/>
    <Container className=''>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </Container>
      </ShoppingCartProvider>
  )
}

export default App
