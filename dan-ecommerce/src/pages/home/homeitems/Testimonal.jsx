import React, { useState } from "react";
import TestimonialCard from "../homeitems/TestimonalCard";
import TestimonalButton from "./TestimonalButton";
import TestimonalClients from "./TestimonalClients";
import authorimg from "../../../assets/images/testimonals/authorprofile.png"
import clientimg from "../../../assets/images/testimonals/clientlogo.png"
import { useEffect } from "react";
import { getBrand, getTestimaonial } from "../../../API/userApi";


// dummy data (replace with API later)
const testimonialsData = [
  { name: "John Doe", image: authorimg, quote: "Showcase customer testimonials that build trust and inspire confidence in your products.", rating: 4.5 },
  { name: "Jane Smith", image: authorimg, quote: "Loved the experience!Loved the experience!", rating: 1 },
  { name: "Jane Smith", image: authorimg, quote: "Loved the experience!Loved the experience!", rating: 2.5 },
  { name: "Jane Smith", image: authorimg, quote: "Loved the experience!Loved the experience! Loved the experience!Loved the experience!", rating: 5 },
];

const clientsData = [
  { name: "Client A", image: clientimg },
  { name: "Client B", image: clientimg },
  { name: "Client C", image: clientimg },
  { name: "Client D", image: clientimg },
  { name: "Client E", image: clientimg },
];

function Testimonal() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [testimonals, setTestimonials] = useState([])
//   const [brand, setbrand] = useState([])

//   console.log(testimonals, "testimonals data >>>>>>>>>");
  

//   const handleNext = () => {
//     if (currentIndex < testimonals.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   const currentTestimonial = testimonals[currentIndex];


//   useEffect(()=>{
//     getTestimaonial(setTestimonials)
//   },[])

// useState(()=>{
//   getBrand(setbrand)
// },[])

  return (
    <div className="w-full relative flex flex-col justify-center aspect-[1440/638] bg-black/20 rounded-[1vw] mb-[2vh]">
      {/* Buttons */}
      {/* <TestimonalButton
        onPrev={handlePrev}
        onNext={handleNext}
        disablePrev={currentIndex === 0}
        disableNext={currentIndex === testimonals.length - 1}
      /> */}

      {/* Testimonial Section */}
      <div className="w-full h-[75%] aspect-[1440/478] flex flex-col justify-between">
        {/* <TestimonialCard
          image={currentTestimonial?.image[0]}
          quote={currentTestimonial?.message}
          rating={currentTestimonial?.starRating}
          name={currentTestimonial?.name}
        /> */}

        {/* Clients Section */}
        {/* <TestimonalClients clients={brand} /> */}
      </div>
    </div>
  );
}

export default Testimonal;
