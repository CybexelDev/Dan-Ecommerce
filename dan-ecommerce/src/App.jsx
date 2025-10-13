import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import ProductDetail from './pages/product_detail_page/ProductDetail'
import CollectionsPage from './pages/collections_page/CollectionsPage'
import CartHome from './pages/cart/CartHome'
import LoginAndSignup from './pages/loginandsignup/LoginAndSignup'
import AboutHome from './pages/about/AboutHome'
import { useSelector } from "react-redux";
import ProfileAndAddress from './pages/profile_and_address_page/ProfileAndAddress';
import Admin from './Admin/pages/Admin';
import AdminLogin from './Admin/pages/Login';


function App() {
  const [count, setCount] = useState(0)
  const { username, accessToken, isLoggedIn } = useSelector((state) => state.auth);
   console.log(username, accessToken, isLoggedIn , "99999999999999999999999999999");

   const token = localStorage.getItem("accessToken");
   
  return (
    // <Router>
    //   <Routes>

    //     {token ? (
    //       <>
    //         <Route path="*" element={<Home />} />
    //         <Route path="/" element={<Home />} />
    //         <Route path="/product/:id" element={<ProductDetail />} />
    //         <Route path="/collections" element={<CollectionsPage />} />
    //         <Route path="/cart" element={<CartHome />} />
    //       </>
    //     ) :

    //       (
    //         <>
    //           <Route path="*" element={<LoginAndSignup />} />
    //           <Route path="/login" element={<LoginAndSignup />} />
    //         </>
    //       )

    //     }


    //   </Routes>
    // </Router>
    
    // <ProfileAndAddress />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Admin />} />
      </Routes>
    </Router>

  )
}

export default App
