import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

function CartItemCard({ id, name, brand, image, price, qty, onDelete, onQuantityChange }) {
  const handleIncrease = () => {
    onQuantityChange(id, qty + 1);
  };

  const handleDecrease = () => {
    if (qty > 1) onQuantityChange(id, qty - 1);
  };

  return (
    <div className="w-full aspect-[884/125] flex justify-between items-center border-b px-[1vw] pt-[1vw]">
      <div className="w-[36.1%] aspect-[319/90] flex justify-between items-center">
        <div className="w-[33%] aspect-[103/90] bg-[#f4f4f4]">
          <img src={image} alt="no" className="w-full h-full object-center" />
        </div>
        <div className="w-[66%] aspect-[205/60] overflow-hidden flex flex-col justify-between">
          <div className="w-full h-[54%] text-[1.2vw] text-ellipsis line-clamp-2">{name}</div>
          <div className="w-full h-[35%] text-[.9vw] text-black/55">{brand}</div>
        </div>
      </div>

      <div className="w-[52%] aspect-[447/27] flex">
        <div className="w-1/3 h-full flex items-center justify-between pr-[3vw]">
          {/* Minus */}
          <button
            onClick={handleDecrease}
            className="h-[90%] aspect-square flex justify-center items-center pb-[.3vw] text-[1.5vw] font-bold border rounded-full hover:bg-gray-200 transition"
          >
            -
          </button>

          {/* Quantity */}
          <span className="text-[1.5vw] w-[3vw] h-[2vw] font-semibold flex justify-center items-center bg-[#D9D9D9] rounded-[.5vw]">
            {qty}
          </span>

          {/* Plus */}
          <button
            onClick={handleIncrease}
            className="h-[90%] aspect-square flex justify-center items-center pb-[.3vw] text-[1.5vw] font-bold border rounded-full hover:bg-gray-200 transition"
          >
            +
          </button>
        </div>

        <div className="w-1/3 h-full flex justify-end pl-[2vw] items-center text-[1.5vw]">
          <h5>₹{(price * qty).toFixed(2)}</h5>
        </div>

        <div className="w-1/3 h-full flex justify-end px-[2vw]">
          <button
            onClick={() => onDelete(id)}
            className="text-[1.8vw] cursor-pointer hover:text-red-600 transition"
          >
            <RiDeleteBin6Fill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
