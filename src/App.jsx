import './App.css'
import Home from './routes/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import NotFound from './routes/NotFound'
import Nav from './components/Navbar'
import FooterEnd from './components/Footer'

function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <FooterEnd />
    </>
  )
}

export default App
