import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";

function RelatedItemsCard({image,primaryColor,title,itemLink}) {
  return (
    <a  href={itemLink} className='w-[31%] aspect[194/176] flex flex-col justify-between'>
        <div className="relative w-full h-[89.65%] bg-[#f4f4f4] rounded-[.5vw]">
            <img src={image} alt="" className='w-full h-full' />
            <div className="absolute w-[2vw] bottom-0 right-0 aspect-square bg-white rounded-tl-[.5vw] flex justify-center items-center
            before:content-['']  before:absolute before:w-[.5vw] before:h-[.5vw] before:z-10 before:bg-[radial-gradient(circle_at_top_left,transparent_0%,_transparent_75%,_white_76%,_white_100%)] 
                    before:-top-[.5vw] before:right-[0vw] before:mask-shape
                    after:content-[''] after:absolute after:w-[.5vw] after:h-[.5vw] after:z-10 after:bg-[radial-gradient(circle_at_top_left,transparent_0%,_transparent_75%,_white_76%,_white_100%)]
                    after:bottom-[0vw] after:-left-[.5vw]
            ">
                <div className="bg-red-400 rounded-full w-[70%] aspect-square flex items-center justify-center">
                    <CgArrowTopRight />
                </div>
            </div>
        </div>
        <div className="w-full h-[9%] flex justify-center items-center">
            <h5 className=' text-[.93vw]'>{title}</h5>
        </div>
    </a>
  )
}

export default RelatedItemsCard