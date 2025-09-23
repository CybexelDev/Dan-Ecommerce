import { useState } from 'react'
import './index.css'
import Home from './pages/home/Home'
import ProductDetail from './pages/product_detail_page/ProductDetail'
import CollectionsPage from './pages/collections_page/CollectionsPage'
import CartHome from './pages/cart/CartHome'
import LoginAndSignup from './pages/loginandsignup/LoginAndSignup'
import AboutHome from './pages/about/AboutHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      {/* <ProductDetail />  */}
      {/* <CollectionsPage /> */}
      {/* <CartHome /> */}
      {/* <LoginAndSignup /> */}
      <AboutHome />
      

    </>
  )
}

export default App
