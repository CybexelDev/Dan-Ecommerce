import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { applayVoucher, getSummery } from '../../API/userApi';


function PaymentCard() {
    const { userId } = useSelector((state) => state.auth);
    const [Summary, setSummery] = useState({});
    const [tottelAmmount, setTotelAmmount] = useState('')
    const [discountRate, setDiscountRate] = useState('')
    const [voucherDiscount, setVoucherDiscount] = useState('')
    const [code, setCode] = useState('')

    console.log(code, "code data >>>>>>>00000000000000000000");


    // console.log(Summary, "summary data >>>>>>>00000000000000000000");


    useEffect(() => {
        const fetchTotal = async () => {
            const data = await getSummery(userId);
            setTotelAmmount(data.totalDiscountedPrice);
            setDiscountRate(data.totalSavings)
        }
        fetchTotal();

    }, [userId]);


    const fetchVoucher = async () => {
        try {
            if (!code) {
                console.log("Please enter a voucher code");
                return;
            }
            const data = await applayVoucher(code, tottelAmmount);
            setTotelAmmount(data.finalAmount)
            setVoucherDiscount(data?.discount)
            console.log(data, "voucher data >>>>>>>");

        } catch (error) {
            console.log(error, "error in voucher >>>>>>>");
        }

    }



    return (
        <div className=' w-full aspect-[440/530] bg-white  rounded-[1.5vw] shadow-[0_0_8px_rgba(0,0,0,0.3)]  flex justify-center items-center '>
            <div className="w-[89.54%] h-[91.32%]  flex flex-col justify-between">
                <div className="w-full h-[79.34%]  flex flex-col justify-between">
                    <div className="w-full h-[7%] ">
                        <p className='text-[1.5vw] font-semibold'>Order Summary</p>
                    </div>
                    <div className="w-full h-[12.23%] pr-[2.8%] flex justify-between ">
                        <input onChange={(e) => setCode(e.target.value)} placeholder='Discount voucher' className="h-full w-[66.84%] shadow-lg bg-[#f4f4f4] rounded-[1vw] p-[1vw] text-[1.3vw]"></input>
                        <button onClick={fetchVoucher} className="h-full w-[31.33%]  bg-black rounded-[1.2vw] text-white shadow-lg font-semibold text-[1.3vw] flex justify-center items-center">
                            Apply
                        </button>
                    </div>
                    <div className="w-full h-[71.1%]  flex flex-col justify-between">
                        {/* <div className="w-full h-[34.5%] flex justify-start">
                        <form className="w-full flex flex-col justify-between">
                            <h5 className='font-semibold text-[1.4vw]'>Payment Method</h5> 
                            <div className="flex flex-col justify-between items-start h-[60%] w-[80%]">
                                <label className=" ">
                                <input
                                    type="radio"
                                    value="Yes"
                                    className="text-black w-[1.5vw] aspect-square"
                                />
                                <span className='text-[1.4vw] '> Credit Card</span>
                                </label>

                                <label className="flex  space-x-2">
                                <input
                                    type="radio"
                                    value="No"
                                    
                                    className="text-black w-[2.5vw] aspect-square"
                                />
                                <span className='text-[1.5vw] w-full flex text-center '>Upi</span>
                                </label>
                            </div>   
                        </form>
                    </div> */}
                        <div className="w-full h-[55.7%] flex flex-col justify-between items-start ">
                            <div className="w-full h-[20.76%] flex justify-between pt-[2vw]">
                                <div className=" h-full w-auto text-[1.8vw] font-semibold">Sub Total</div>
                                <div className=" h-full text-[1.5vw] font-semibold">${"" || tottelAmmount}</div>
                            </div>
                            <div className="w-[97%] h-[20.76%]  flex justify-between text-[1.3vw] pt-[2.3vw] ">
                                <div className=" h-full w-auto ">Discount</div>
                                <div className=" h-full ">${discountRate}</div>
                            </div>
                            {voucherDiscount &&
                                <div className="w-[97%] h-[20.76%]  flex justify-between text-[1.3vw] pt-[1.9vw] ">
                                    <div className=" h-full w-auto ">Voucher Discount</div>
                                    <div className=" h-full ">${voucherDiscount}</div>
                                </div>
                            }
                            <div className="w-[97%] h-[20.76%] flex justify-between text-[1.3vw] pb-[1vw] pt-[1.9vw]">
                                <div className=" h-full w-auto ">Delivery Charges</div>
                                <div className=" h-full ">$6</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full h-[15.9%]  pb-[1vw]">
                    <button className="bg-black shadow-xl w-full h-full rounded-[1.5vw] text-white font-semibold text-[2vw]">
                        Confirm & Pay
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PaymentCard