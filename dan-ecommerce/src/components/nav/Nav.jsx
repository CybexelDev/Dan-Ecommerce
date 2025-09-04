import React from 'react'
import logo from "../../assets/images/home/logo.png"
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

function Nav() {
  return (
    <div className=' nav absolute flex top-[2.6vw] left-[1.5vw]  w-[42.5%]  border border-white  aspect-[100%/11%]  z-10]'>
        <div className='w-[23%]   rounded-tl-2xl pl-[4%] py-[1%]'>
            <img src={logo} alt="logo" className='w-full h-full' />
        </div>
        <div className='w-[77%] flex  items-center justify-center  rounded-br-2xl  '>
            <div className="h-[57%] w-full flex justify-between items-center px-[10%] gap-[1vw] text-[1vw] ">
  <ul className="flex justify-around gap-[1.7vw] h-[56%] w-[80%] items-center py-2 font-semibold text-[1.1vw]">
    <li>Shop</li>
    <li>Collections</li>
    <li>Blog</li>
    <li>Support</li>
  
    <li className='text-[1.1vw]'><FaSearch /></li>
    <li className='text-[1.2vw]'><FaShoppingBasket /></li>
  </ul>
</div>

        </div>
    </div>
  )
}

export default Nav