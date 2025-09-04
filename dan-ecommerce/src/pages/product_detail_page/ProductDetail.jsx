import React from 'react';
import Nav from  "../../components/nav/Nav"
import ProductSmallImageCard from './ProductSmallImageCard';
import pimage1 from "../../assets/images/productdetail/pimage1.png"
import carticon from "../../assets/images/productdetail/carticon.png"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import RelatedItemsCard from './RelatedItemsCard';


function ProductDetail() {
  return (
    <div className='w-full aspect-[1440/1024] '>
        {/* Nav Section Start */}
        <div className="relative w-full aspect-[1440/132]">
        <Nav />
        </div>
        {/* Nav Section End */}

        {/* Main  section */}
        <div className="flex w-full aspect[1440/892] ps-[2.9%] pe-[3.95%]  justify-between ">


            {/* Main image section        */}
            <div className="relative  w-[51.23%] aspect-[687/892]  ">
            <div className="absolute w-[8vw] aspect-[5/3.5] top-[0vw] right-[0vh] bg-white rounded-bl-[1vw] flex justify-center items-center 
            before:content-['']  before:absolute before:w-[1.5vw] before:h-[1.5vw] before:z-10 before:bg-[radial-gradient(circle_at_bottom_left,transparent_0%,_transparent_75%,_white_76%,_white_100%)] 
                    before:top-[0vw] before:-left-[1.5vw] before:mask-shape
                    after:content-[''] after:absolute after:w-[1.5vw] after:h-[1.5vw] after:z-10 after:bg-[radial-gradient(circle_at_bottom_left,transparent_0%,_transparent_75%,_white_76%,_white_100%)]
                    after:-bottom-[1.5vw] after:right-[0vw]">
                        <div className="h-[90%] aspect-square bg-[#f4f4f4] rounded-full flex justify-center items-center">
                            <img src={carticon} alt=""
                            className='rounded-full w-[50%] ' />
                        </div>
                    </div>
                <div className="w-full h-[91.4%] flex flex-col justify-between">
                    <div className="w-full h-[84%]  rounded-[1vw]">
                        <img src={pimage1} alt=""
                            className='w-full h-full rounded-[1vw]' />
                    </div>
                    <div className="w-full h-[13.4%]  flex justify-center ">
                        <div className="w-[54.5%]  flex justify-between">
                            <ProductSmallImageCard 
                             image={pimage1}/>
                            <ProductSmallImageCard 
                             image={pimage1}/>
                            <ProductSmallImageCard 
                             image={pimage1}/>
                            
                        </div>
                    </div>
                </div>
                <div className="w-full h-[8.6%]"></div>
            </div>
        <div className="w-[46.76%] aspect-[624/892]">
            <div className="w-full h-[85%] flex flex-col justify-between">
                <div className="w-full h-[68.3%] flex flex-col justify-between">
                    <div className="w-full h-[68.3%] flex flex-col justify-between">
                        <div className="w-full h-[72.9%]  flex">
                            <div className="w-[90.12%] h-full flex flex-col justify-between">
                                <div className="w-full h-[69.26%] flex flex-col justify-between">
                                    <div className="w-full h-[15.16%] flex justify-start items-center">
                                        <p className='text-[1.3vw] text-black/50 font-semibold'>Dar Al Nahda Tr.</p>
                                    </div>
                                    <div className="w-full h-[53.4%] flex flex-col justify-between">
                                        <div className="w-full h-[23.15%] flex items-center">
                                            <p className='text-[1.8vw] font-semibold'>GOLD PRESSED CARROT BLEND JUICE</p>
                                        </div>
                                        <div className="w-full h-[56.85%] flex items-center ">
                                            <p className='text-[1.25vw]'>A refreshing, nutrient-rich juice made from farm-fresh carrots, pressed to perfection.</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-[14%]  flex justify-start items-center">
                                        <p className='text-[1.25vw] text-black/50'> (4.5/5 • 120 reviews)</p>
                                    </div>
                                </div>
                                <div className="w-full h-[16%] ">
                                    <div className="h-full aspect-[165/47]  flex justify-center items-center">
                                        <p className='text-[2.5vw] text-[#7C0101] font-semibold'>$120.99</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[9.88%] h-full "></div>
                        </div>


                        {/* Button Section */}
                        <div className="w-full h-[18%]  flex justify-between">
                            <div className="w-[48%] h-full border-2 border-black rounded-[1vw] flex">
                                <div className="w-[34.88%] h-full  rounded-l-[1vw] border-r flex items-center justify-center">
                                    <div className="w-[85.7%] h-[42.85%]  flex justify-between items-center px-[.3vw] ">
                                        <button className='text-[1vw] '>
                                            <FaMinus />
                                        </button>
                                        <p className=' text-[1.8vw]'>50</p>
                                        <button className='text-[1vw] font-extrabold '>
                                            <FaPlus />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-[65.12%] h-full rounded-r-[1vw] flex justify-center items-center">
                                    <a href='#' className="w-[80%] h-[70%] flex justify-center items-center gap-[.3vw]">
                                        <img src={carticon} alt=""
                                        className='h-[70%] aspect-square ' />
                                        <p className='font-semibold text-[1.3vw]'>Add to cart</p>
                                    </a>
                                </div>
                            </div>
                            <div className="w-[48.4%] h-full">
                                <button className='bg-black w-full h-full rounded-[1vw] text-white text-[1.2vw] font-semibold'>Buy now</button>
                            </div>
                        </div>
                        {/* End of button section */}
                    </div>

                    {/* Description Section */}
                    <div className="w-full h-[27.3%] flex flex-col justify-between">
                        <div className="w-full h-[22.5%]">
                            <h5 className='text-[1.2vw] font-semibold '>Description</h5>
                        </div>
                        <div className="w-full h-[66%] ">
                            <p className='text-[1.2vw] text-black/65'>A refreshing blend of farm-fresh carrots, pressed to preserve nutrients and natural flavor.
                                 Every sip delivers a rich dose of beta-carotene, essential vitamins, and 
                                 antioxidants—perfect for a healthy lifestyle.</p>
                        </div>
                    </div>
                    {/* Description section End */}

                </div>

                {/* You may also like Setion */}
                <div className="w-full h-[28.2%]  flex flex-col justify-between">
                    <div className="w-full h-[12.61%] ">
                        <h5 className='text-[1.2vw] font-semibold'>You may also like</h5>
                    </div>

                    {/* Related items Card section */}
                    <div className="w-full h-[82.24%]  flex justify-between ">
                        <RelatedItemsCard
                        image={pimage1}
                        title={"Gold pressed carrot blend juice"} 
                        itemLink={"#"}/>
                        <RelatedItemsCard
                        image={pimage1}
                        title={"Gold pressed carrot blend juice"} 
                        itemLink={"#"}/>
                        <RelatedItemsCard
                        image={pimage1}
                        title={"Gold pressed carrot blend juice"} 
                        itemLink={"#"}/>
                    </div>
                    {/* Related item card section End */}
                </div>
                {/* You may also like section */}
            </div>
            <div className="w-full h-[15%]"></div>
        </div>
        </div>
    </div>
  )
}

export default ProductDetail