import Home from './routes/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import NotFound from './routes/NotFound'
import Nav from './components/Navbar'
import FooterEnd from './components/Footer'
import Cart from './routes/Cart'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <FooterEnd />
    </>
  )
}

export default App
