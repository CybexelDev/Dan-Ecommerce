import React from "react";
import homeherobg from "../../../assets/images/home/homeherobg.png";
import HeroButton from "./HeroButton";
import Nav from "../../../components/nav/HomeNav";
import HomeNav from "../../../components/nav/HomeNav";

function Hero() {
  return (
    <div className="parent-div w-full h-full aspect-[1440/730] relative flex flex-col justify-center items-center rounded-[1.5vw] "
    style={{
    backgroundImage: `url(${homeherobg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
      }}
    >
      <HomeNav />
  


<div className="button absolute bottom-[3.8%] right-[4%]  w-[6.5%] h-[5.5%]">
  <HeroButton />
</div>


  

 
</div>
  
  );
}

export default Hero;


