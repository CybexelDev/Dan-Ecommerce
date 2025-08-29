import React from 'react'
import topicon from "../../../assets/images/components/toprightarrowcircle.png"
import vid from "../../../assets/videos/video5.mp4"

function VideoSection() {
  return (
    <div className='w-full aspect-[1440/515] bg-amber-300 relative rounded-[1.5vw] mb-[2vw]'>
        <video 
          className='w-full aspect-[1440/515] object-cover object-center overflow-hidden rounded-[1.5vw] '
          src={vid}
          autoPlay
          muted
          loop
          ></video>
        <div className="absolute  bg-white w-[4.85%] aspect-square top-0 right-0 rounded-bl-[1.5vw]  flex justify-center items-center 
                                before:content-['']  before:absolute before:w-[1.5vw] before:h-[1.5vw] before:z-10 before:bg-[radial-gradient(circle_at_bottom_left,transparent_0%,_transparent_75%,_white_76%,_white_100%)] 
                                before:-top-[0vw] before:-left-[1.5vw] before:mask-shape
                                after:content-[''] after:absolute after:w-[1.5vw] after:h-[1.5vw] after:z-10 after:bg-[radial-gradient(circle_at_bottom_left,transparent_0%,_transparent_75%,_white_76%,_white_100%)]
                                 after:-bottom-[1.5vw] after:right-[0vw]">
                          <img className="w-[71.5%] aspect-square"
                          src={topicon} alt="tr arrow" />
                        </div>
    </div>
  )
}

export default VideoSection