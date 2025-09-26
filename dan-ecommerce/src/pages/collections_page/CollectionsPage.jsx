import React, {useEffect, useState, useRef} from 'react'
import Nav from '../../components/nav/Nav'
import listicon from "../../assets/images/collections_page/listicon.png"
import listiconcenter from "../../assets/images/collections_page/listiconcenter.png"
import searchicon from "../../assets/images/collections_page/searchicon.png"
import ProductList from './ProductList'
import CategoryList from './CategoryList'
import { getCategorybasedProduct } from '../../API/userApi'

function CollectionsPage() {
    const [isCategoryOpen, setIsCategoryOpen] = useState(true)

    const [products, setProducts] = useState([]);


    const [firstCategoryId, setFirstCategoryId] = useState("");
    const [selectedCategoryName, setSelectedCategoryName] = useState("")
    
    //  console.log(firstCategoryId, "categoryValue>>>>>>>>>>>>>>");
    


    const categoryToggle = () => {
        setIsCategoryOpen(prev => !prev)
    }
    // console.log(isCategoryOpen)

    // Sort section setup
    const [isSortOpen, setIsSortOpen] = useState(false)
    const [isSelected, setIsSelected] = useState("Popularity")
    const dropDownRef = useRef(null)

    // Close Dropdown menu click menu outside 
    useEffect (() =>    {
        function handleClickOutside(event) {
            if(dropDownRef.current && !dropDownRef.current.contains(event.target)){
                setIsSortOpen(false)
            }
        }
        document.addEventListener("mousedown",handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    },[]);


    // send selected option to backend
    const handleSelect =  (option) => {
        setIsSelected(option);
        setIsSortOpen(false);

    }

    useEffect(() => {
    if (firstCategoryId) {
      const fetchProducts = async () => {
        try {
          const data = await getCategorybasedProduct(firstCategoryId);
          setProducts(data); 
        } catch (error) {
          console.error("Error fetching category products:", error);
        }
      };
      fetchProducts();
    }
  }, [firstCategoryId]);

//  console.log(products, "products>>>>>>>>>>>>>>>>>>>>>>>");




  // callback function to receive from child
  const handleCategoryId = (id,selectedCategoryName) => {
    setFirstCategoryId(id);
    setSelectedCategoryName(selectedCategoryName)
     console.log("Received from child:", id,selectedCategoryName);
  };


    // end of selected option
    const sortOptions = ["Popularity", "Newest", "Best Rated", "Price: High to Low" , "Price: Low to High"];
  return (
    <div className='relative w-full aspect-[1440/1663]   pt-[10.9%] mb-[3vw]  '>
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
                    <div ref={dropDownRef} className="w-[79%] aspect-[226/60] flex flex-col justify-between">
                        <div className={`h-[51.6%] ${ isCategoryOpen ? 'w-[120%]' : 'w-full' }  flex  items-center`}>
                            <h5 className={`text-[#803314]   font-semibold ${ isCategoryOpen ? 'text-[1.7vw]':'text-[1.8vw]'} `}>{selectedCategoryName}</h5>
                        </div>
                        <div className="w-full h-[30%] bg-white flex  items-center">
                            <p className={`text-[1.14vw] font-semibold ${ isCategoryOpen ? 'text-[1.3.5vw]':'text-[1.4vw]'} `}>Showing all 30 results</p>
                        </div>
                    </div>
                </div>
                <div className="relative  h-full w-[39.3%]  flex justify-between items-center">
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
                    {/* Sort Section Start */}
                    <button onClick={() => setIsSortOpen(!isSortOpen)} className=" w-[9.23%] h-[67.21%] flex justify-center items-center shadow-xl rounded-[.5vw]">
                       <img src={listiconcenter} alt="" 
                        className='w-[70%] h-[70%] ' />
                    </button>

                    {/* Dropdown menu */}
                        {isSortOpen && (
                            <div className={`absolute right-[3.5vw] top-[.5vw]  w-[54.1%] aspect-[275/314] bg-white shadow-2xl  ${ isCategoryOpen ? 'rounded-[1.5vw]':'rounded-[2vw]'}  z-10 flex items-center justify-center `}>
                            <ul className="py-2  w-[92%] h-[87.5%] flex flex-col justify-between ">
                                {sortOptions.map((option) => (
                                <li
                                    key={option}
                                    onClick={() => handleSelect(option)}
                                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 font-semibold ${ isCategoryOpen ? ' text-[1.2vw]':'text-[1.5vw]'} flex items-center ${
                                    isSelected === option ? "w-full h-[18.18%] shadow shadow-black/10 rounded-[1vw] font-semibold text-[#BC7050]" : ""
                                    }`}
                                >
                                    {option}
                                </li>
                                ))}
                            </ul>
                            </div>
                        )}
                    {/* Sort section end */}
                </div>
            </div>
            

            {/* Items list section */}
            {!isCategoryOpen ? (
            <div className="w-full h-[92.89%] flex justify-end pl-[3.6%] pr-[6.6%]">
                <div className="h-full w-[95.1%]">
                <ProductList productData={products} />
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
                            <CategoryList onFirstCategorySelect={handleCategoryId}  isCategoryOpen={isCategoryOpen} />
                        </div>

                        {/* List category end */}
                        {/* Category side end */}
                    </div>
                    {/* Products List Section */}
                    <div className="w-[66.75%] h-full ">
                        <div className="w-full h-[92.89%] flex justify-between ">
                            <ProductList productData={products}  isOpen={isCategoryOpen} />
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