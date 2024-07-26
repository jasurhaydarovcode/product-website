import Home from './routes/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import NotFound from './routes/NotFound'
import Nav from './components/Navbar'
import FooterEnd from './components/Footer'
import Cart from './routes/Cart'
import { useState } from 'react'

function App() {

  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item])
  }

  return (
    <>
      <Nav length={cart.length}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products addToCart={addToCart} />} />
        <Route path='/cart' element={<Cart cart={cart}/>} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <FooterEnd />
    </>
  )
}

export default App
