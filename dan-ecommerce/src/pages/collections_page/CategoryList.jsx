import React, { useState } from 'react'
import { CgArrowTopRight } from 'react-icons/cg';
import { CgArrowBottomLeft } from "react-icons/cg";

function CategoryList() {
    const items = [
  {
    id: 1,
    name: "Item One",
    subItems: ["Sub A", "Sub B", "Sub C"], // 3 subitems
  },
  {
    id: 2,
    name: "Item Two",
    subItems: ["Sub A"], // 1 subitem
  },
  {
    id: 3,
    name: "Item Three",
    subItems: ["Sub A", "Sub B", "Sub C", "Sub D", "Sub E", "Sub F", "Sub G"], // 7 subitems
  },
];
    
    const [openSubcategory, setOpenSubCategory] = useState(null)

    const toggleSubCategory = (id) => {
        setOpenSubCategory( (prev) => (prev === id ? null : id));
    }

  return (
    <div className='w-full h-full  px-[6.7%] pt-[2.54%]'>
        <div className="w-full  h-full">
            {items.map((item) => (
                <div className="relative w-full aspect-[350/71] bg-white rounded-[1vw] mb-[3.5%]">
                    <div className="absolute top-0 right-0 w-[2.65vw] aspect-square bg-[#f4f4f4] rounded-bl-[.5vw] flex justify-center items-center">
                        <button onClick={() =>toggleSubCategory(item.id)} className="w-[70%] aspect-square flex justify-center items-center bg-[#EDE4FC] rounded-full
                        before:content-['']  before:absolute before:w-[1vw] before:h-[1vw] before:z-10 before:bg-[radial-gradient(circle_at_bottom_left,transparent_0%,_transparent_75%,_#f4f4f4_76%,_#f4f4f4_100%)] 
                        before:top-[0vw] before:-left-[1vw] before:mask-shape
                        after:content-[''] after:absolute after:w-[1vw] after:h-[1vw] after:z-10 after:bg-[radial-gradient(circle_at_bottom_left,transparent_0%,_transparent_75%,_#f4f4f4_76%,_#f4f4f4_100%)]
                        after:-bottom-[1vw] after:right-[0vw]">
                            { openSubcategory === item.id  ? 
                            <CgArrowBottomLeft className='text-[1.4vw]' /> : <CgArrowTopRight className='text-[1.4vw]' />  }
                        </button>
                    </div>
                    <div className="w-full h-full pl-[5.14%] flex items-center text-[1.6vw] ">
                        <h5 className='text-[#F2591A] font-semibold'>{item.name}</h5>
                    </div>
                    <div className="w-full">
                        { openSubcategory === item.id ? 
                        <ul className="w-full  pl-[5.14%] flex flex-col justify-center items-center text-[1.6vw]">
            {item.subItems.map((sub, index) => (
              <li key={index} className='w-full h-[3vw] flex ju '>{sub}</li>
            ))}
          </ul>  :
          <div className=""></div>}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CategoryList