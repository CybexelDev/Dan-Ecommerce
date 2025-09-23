import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import ProductDetail from './pages/product_detail_page/ProductDetail'
import CollectionsPage from './pages/collections_page/CollectionsPage'
import CartHome from './pages/cart/CartHome'
import LoginAndSignup from './pages/loginandsignup/LoginAndSignup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/cart" element={<CartHome />} />
        <Route path="/login" element={<LoginAndSignup />} />
      </Routes>
    </Router>
  )
}

export default App
