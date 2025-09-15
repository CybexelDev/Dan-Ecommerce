import React from 'react'
import rightarrow from "../../../assets/images/testimonals/arrowright.png"
import leftarrow from "../../../assets/images/testimonals/arrowleft.png"
import authorprofile from "../../../assets/images/testimonals/authorprofile.png"
import star from "../../../assets/images/testimonals/star.png"
import clientlogo from "../../../assets/images/testimonals/clientlogo.png"

function Testimonal() {
  return (
    <div className='w-full relative flex flex-col justify-center aspect-[1440/638] bg-black/20 rounded-[1vw] mb-[2vh]'>
        {/* Top fixd button Section */}
        <div className="absolute top-[0vw] right-[0vw] bg-white w-[9.3%] aspect-[104/48] flex justify-between p-[.5vw] rounded-bl-[1vw]
                before:content-['']  before:absolute before:w-[1vw] before:h-[1vw] before:z-10 before:bg-[radial-gradient(circle_at_bottom_left,transparent_0%,_transparent_70%,_white_71%,_white_100%)] 
                before:top-[0vw] before:-left-[1vw] before:mask-shape
                after:content-[''] after:absolute after:w-[1vw] after:h-[1vw] after:z-10 after:bg-[radial-gradient(circle_at_bottom_left,transparent_0%,_transparent_70%,_white_71%,_white_100%)]
                 after:-bottom-[1vw] after:-right-[0vw]">
            <div className="flex justify-between w-full px-[.4vw]">
                <div className="h-full aspect-square bg-[#D8D8D8] rounded-full flex items-center justify-center p-1 hover:bg-black/20"><img src={leftarrow} alt="" className='w-[80%] '  /></div>
                <div className="h-full aspect-square bg-[#D8D8D8] rounded-full flex align-center justify-center p-1 hover:bg-black/20"><img src={rightarrow} alt="" className='w-[80%] ' /></div> 
            </div>
        </div>
        {/* End of top fixed button section */}
        {/* testimonal & clients */}
        <div className="w-full h-[75%] aspect-[1440/478] flex flex-col justify-between">
            {/* Testimonal Section */}
            <div className="w-full h-[69%]  flex flex-col justify-between">
                <div className=" w-full h-[73%] flex flex-col justify-between">
                    <div className=" h-[42%] w-full flex justify-center ">
                        <div className="h-full aspect-square rounded-full">
                            <img src={authorprofile} alt="autor image" className='w-full h-full object-cover rounded-full' />
                        </div>
                    </div>
                    <div className=" w-full h-[48%] text-center px-[10%]">
                        <p className='text-[2.9vw] font- leading-[3vw]'>Showcase customer testimonials that build
                            trust and inspire confidence in your products.</p>
                    </div>
                </div>
                <div className=" w-full h-[18%] flex flex-col justify-between">
                    <div className="h-[33%] text-center  flex justify-center gap-[.3vw] ">
                        <img className='h-full aspect-square ' src={star} alt=""  />
                        <img className='h-full aspect-square ' src={star} alt=""  />
                        <img className='h-full aspect-square ' src={star} alt=""  />
                        <img className='h-full aspect-square ' src={star} alt=""  />
                        <img className='h-full aspect-square ' src={star} alt=""  />
                    </div>
                    <div className="h-[59%]  text-center flex justify-center items-center">
                        <h4 className='text-[2vw] '>Author</h4>
                    </div>
                </div>
            </div>
            {/* End of Testimonal */}
            {/* Client Section */}
            <div className="w-full h-[18%]  flex flex-col justify-between">
                <div className=" flex justify-center  w-[42%] text-[1.3vw] mx-auto ">
                    <p className=''>Feature client logos to build trust and credibility for your brand:</p>
                </div>
                <div className="w-[42%] aspect-[600/27] mx-auto flex justify-center items-center gap-[1.8vw] py-[.6vh]">
                    <img className='w-[15%] h-full' src={clientlogo} alt="" />
                    <img className='w-[15%] h-full' src={clientlogo} alt="" />
                    <img className='w-[15%] h-full' src={clientlogo} alt="" />
                    <img className='w-[15%] h-full' src={clientlogo} alt="" />
                    <img className='w-[15%] h-full' src={clientlogo} alt="" />
                </div>
            </div>
            {/* End of Client Section */}
        </div>
    </div>
  )
}

export default Testimonal