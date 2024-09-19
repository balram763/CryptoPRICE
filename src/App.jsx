import React from 'react'
import Navbar from './components/Navbar'
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CoinDetails from './pages/CoinDetails';
import Cart from './pages/Cart';




const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='*' element={<PageNotFound/>}/>

      </Routes>
    </Router>
   
    </>
  )
}

export default App