import React from "react"
import selectedmark from "../../assets/images/profileandaddress/selectedmark.png"

function AddressCard({
  id,
  name,
  city,
  landmark,
  district,
  pincode,
  isSelected,
  onDeliverHere,
  onChange,
  onDelete
}) {
  return (
    <div
      className={`relative m-10 w-[100%] flex flex-col justify-between py-[3.54%] ${
        isSelected ? "aspect-[817/140]" : "aspect-[817/203]"
      } bg-red-600 shadow-xl rounded-[2vw]`}
    >
      {/* Top Sticky Section */}
      <div className="absolute top-[0] right-[0] w-[14.44%] aspect-[118/64] flex justify-end items-center rounded-bl-[2vw] bg-[#0000000D]
        before:content-['']  before:absolute before:w-[2vw] before:h-[2vw] before:z-10 before:bg-[radial-gradient(circle_at_bottom_left,transparent_0%,_transparent_70%,#0000000D_71%,#0000000D_100%)] 
        before:-top-[0vw] before:-left-[2vw] before:mask-shape
        after:content-[''] after:absolute after:w-[2vw] after:h-[2vw] after:z-10 after:bg-[radial-gradient(circle_at_bottom_left,transparent_0%,_transparent_70%,#0000000D_71%,#0000000D_100%)]
        after:-bottom-[2vw] after:-right-[0vw]"
      >
        <button
          onClick={isSelected ? onChange : onDelete}
          className="w-[83%] aspect-[98/34] rounded-[2vw] bg-[#D8D8D8] font-semibold text-[1.5vw]"
        >
          {isSelected ? "Change" : "Delete"}
        </button>
      </div>

      {/* Header */}
      <div className="w-[33.17%] aspect-[217/28] ml-[2.20%] flex justify-between ">
        <div className="w-[12.8%] aspect-[32/28] bg-[#E0E0E0] flex justify-center items-center font-semibold rounded-[1vw] text-[2.3vw]">
          2
        </div>
        <div className="w-[83%] aspect-[225/28] text-[#F2591A] flex justify-between items-center">
          <div className="w-[90.66%] h-full flex items-center text-[2.3vw] font-semibold">
            DELIVERY ADDRESS
          </div>
          {isSelected && (
            <img src={selectedmark} className="w-[9.33%] aspect-[1/1]" />
          )}
        </div>
      </div>

      {/* Address */}
      <div className="w-[62.17%] aspect-[508/27] ml-[7.83%] flex items-center justify-between text-[2.1vw] font-semibold">
        <p>
          {name}, {landmark}, {city}, {district}, {pincode}
        </p>
      </div>

      {/* Deliver Here Button */}
      {!isSelected && (
        <button
          onClick={onDeliverHere}
          className="w-[21.41%] aspect-[175/47] bg-amber-500 ml-[6.48%] rounded-[4vw] text-white text-[2.5vw] font-semibold"
        >
          Deliver here
        </button>
      )}
    </div>
  )
}

export default AddressCard
