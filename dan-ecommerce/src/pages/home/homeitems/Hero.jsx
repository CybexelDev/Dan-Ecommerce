import React from "react";
import homeherobg from "../../../assets/images/home/homeherobg.png";
import logo from "../../../assets/images/home/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import QuarterCircleBox from "./QuarterCircle";

function Hero() {
  return (
    <div className="parent-div aspect-[1440/730] relative flex bg-[#e69f9f9d]">
  {/* Background image */}
  <img
    className="w-full h-full absolute object-cover rounded-4xl"
    src={homeherobg}
  />
  <QuarterCircleBox />

  

 
</div>
  
  );
}

export default Hero;


