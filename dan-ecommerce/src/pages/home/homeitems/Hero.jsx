import React, { useState, useEffect } from "react";
import HeroButton from "./HeroButton";
import HomeNav from "../../../components/nav/HomeNav";
import { getHeader } from "../../../API/userApi";
import { useSelector } from "react-redux";
// Simulating backend API fetch
const fetchHeroImages = async () => {



  return [
    homeherobg, // local image will be first by default
    "https://picsum.photos/id/1018/1440/730",
    "https://picsum.photos/id/1024/1440/730",
    "https://picsum.photos/id/1037/1440/730",
  ];
};

function Hero() {

const [images, setImages] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ fetch header images from backend
  useEffect(() => {
    const fetchHeaderImages = async () => {
      try {
        const res = await getHeader();
        // take all webImage arrays and flatten them
        const headerImages = res.data.flatMap(item => item.webImage);
        setImages(headerImages); // only backend images
      } catch (error) {
        console.error("Error fetching header:", error);
      }
    };

    fetchHeaderImages();
  }, []);

  // next / prev buttons

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Go to prev image

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };




  return (
    <div
      className="parent-div w-full md:h-[92vh] h-[20vh] aspect-[1440/730] relative flex flex-col justify-center items-center rounded-[1.5vw]"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <HomeNav />

      {/* Buttons */}
      <div className="button absolute bottom-[3.8%] right-[4%] w-[6.5%] h-[5.5%]">
        <HeroButton
          onPrev={handlePrev}
          onNext={handleNext}
          disablePrev={currentIndex === 0}
          disableNext={currentIndex === images.length - 1}
        />
      </div>
    </div>
  );
}

export default Hero;
