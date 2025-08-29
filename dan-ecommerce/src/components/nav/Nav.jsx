import React from 'react'
import logo from "../../assets/images/home/logo.png"
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

function Nav() {
  return (
    <div className=' nav absolute flex top-[0] left-[0]  w-[42.5%]  bg-white   aspect-[100%/11%] rounded-tl-[1.8vw] rounded-br-[1.8vw] z-10
    before:content-[""] before:w-[2vw] before:h-[2vw] before:absolute before:bg-[radial-gradient(circle_at_bottom_right,transparent_0%,_transparent_71%,_white_72%,_white_100%)] before:top-0 before:-right-[2vw]
    after:content-[""] after:w-[2vw] after:h-[2vw] after:absolute after:bg-[radial-gradient(circle_at_bottom_right,transparent_0%,_transparent_70%,_white_71%,_white_100%)] after:-bottom-[2vw] after:left-[0]'>
        <div className='w-[23%]   rounded-tl-2xl pl-[4%] py-[1%]'>
            <img src={logo} alt="logo" />
        </div>
        <div className='w-[77%] flex  items-center justify-center  rounded-br-2xl  '>
            <div className="h-[57%] w-full flex justify-between items-center px-[10%] gap-2 text-[1vw] ">
  <ul className="flex justify-around gap-4 h-[56%] w-[80%] items-center py-2 font-semibold">
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