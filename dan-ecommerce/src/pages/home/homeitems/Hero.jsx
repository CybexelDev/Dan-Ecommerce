import React, { useState, useEffect } from "react";
import HeroButton from "./HeroButton";
import HomeNav from "../../../components/nav/HomeNav";
import homeherobg from "../../../assets/images/home/homeherobg.png";

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

  // Fetch images
  useEffect(() => {
    const loadImages = async () => {
      const data = await fetchHeroImages();
      setImages(data);
    };
    loadImages();
  }, []);

  // Go to next image
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
      className="parent-div w-full h-full aspect-[1440/730] relative flex flex-col justify-center items-center rounded-[1.5vw]"
      style={{
        backgroundImage: `url(${images[currentIndex] || homeherobg})`,
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
