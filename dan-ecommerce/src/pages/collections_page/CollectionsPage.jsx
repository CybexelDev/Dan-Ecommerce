import React, {useState} from 'react'
import Nav from '../../components/nav/Nav'
import listicon from "../../assets/images/collections_page/listicon.png"
import listiconcenter from "../../assets/images/collections_page/listiconcenter.png"
import searchicon from "../../assets/images/collections_page/searchicon.png"
import ProductList from './ProductList'
import CategoryList from './CategoryList'

function CollectionsPage() {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)

    const categoryToggle = () => {
        setIsCategoryOpen(prev => !prev)
    }
    console.log(isCategoryOpen)
  return (
    <div className='relative w-[100vw] aspect-[1440/1663]   pt-[10.9%] mb-[3vw]  '>
        <Nav />
        <div className="w-[100%] h-[100%]  flex flex-col justify-between ">
            {/* Top bar Section  */}
            <div className={`w-full h-[4.98%]  flex justify-between  ${
    isCategoryOpen ? 'pl-[29.5%] pr-[3%]' : 'pl-[3.6%]  pr-[6.6%] '
  }`}>
                <div className="h-full w-[22.43%] flex justify-between items-start">
                    <button onClick={categoryToggle} className="w-[18%] aspect-[52/50] bg-[#F2ECEC] rounded-[.5vw] flex justify-center items-center shadow-md">
                        <img src={listicon} alt=""
                         className='w-[60%] aspect-square' />
                    </button>
                    <div className="w-[79%] aspect-[226/60] flex flex-col justify-between">
                        <div className={`h-[51.6%] ${ isCategoryOpen ? 'w-[120%]' : 'w-full' }  flex  items-center`}>
                            <h5 className={`text-[#803314]   font-semibold ${ isCategoryOpen ? 'text-[1.7vw]':'text-[1.8vw]'} `}>Food & Beverages</h5>
                        </div>
                        <div className="w-full h-[30%] bg-white flex  items-center">
                            <p className={`text-[1.14vw] font-semibold ${ isCategoryOpen ? 'text-[1.3.5vw]':'text-[1.4vw]'} `}>Showing all 30 results</p>
                        </div>
                    </div>
                </div>
                <div className="h-full w-[39.3%]  flex justify-between items-center">
                    <div className="w-[87.4%] h-full  flex justify-center items-center">
                         <form className="w-full h-[75%]  px-[3.5%]  flex rounded-[.5vw] shadow-xl  text-black">
                            <button  className="w-[7.75%] h-full  flex justify-center items-center">
                                <img src={searchicon} alt=""
                                  className='w-[90%] aspect-square' />
                            </button>
                            <div className="w-[92.25%] h-full  flex justify-start items-center px-[1vw]">
                                <input type="text"  placeholder='Search' className='text-[1.4vw]  text-black px-[1vw] w-full' />
                            </div>
                         </form>
                    </div>
                    <div className="w-[9.23%] h-[67.21%] flex justify-center items-center shadow-xl rounded-[.5vw] ">
                       <img src={listiconcenter} alt="" 
                        className='w-[70%] aspect-square' />
                    </div>
                </div>
            </div>
            

            {/* Items list section */}
            {!isCategoryOpen ? (
            <div className="w-full h-[92.89%] flex justify-end pl-[3.6%] pr-[6.6%]">
                <div className="h-full w-[95.1%]">
                <ProductList />
                </div>
            </div>
            ) : (
            <div className="w-full h-[92.89%] flex justify-end pl-[2.77%] pr-[2.77%] ">
                <div className=" w-full flex justify-between">
                    <div className="relative w-[30.65%] h-full ">
                        {/* Category side */}
                        {/* Heading Category */}
                        <div className="absolute top-[-1.3vw] left-1/2 -translate-x-1/2  w-[27.64%] aspect-[115/36]">
                            <h5 className='text-[#6C090E] text-[1.7vw] font-semibold'>Categories</h5>
                        </div>
                        {/* Heading end category */}
                        {/* List category */}
                        <div className="w-full h-[2.9%] "></div>
                        <div className="w-full h-[97.1%] bg-[#f4f4f4] rounded-[1.5vw]">
                            <CategoryList isCategoryOpen={isCategoryOpen} />
                        </div>

                        {/* List category end */}
                        {/* Category side end */}
                    </div>
                    {/* Products List Section */}
                    <div className="w-[66.75%] h-full ">
                        <div className="w-full h-[92.89%] flex justify-between ">
                            <ProductList isOpen={isCategoryOpen} />
                        </div>
                    </div>
                </div>
            </div>
            )}

        </div>

        
    </div>
  )
}

export default CollectionsPage