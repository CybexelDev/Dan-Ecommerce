import React, { useEffect, useState } from 'react'
import selectedmark from "../../assets/images/profileandaddress/selectedmark.png"
import AddressAddAndForm from './AddressAddAndForm'
import AddressCard from './AddressCard'
import AddressForm from './AddressForm'


function AddressSection() {
  const [isOpen, setIsopen] = useState(false)
  const [addresses, setAddresses] = useState([])
  
  useEffect(() =>{
    const fetchAddresses = async () =>{
      try{
        // Add api end point here 
        const res = await fetch(""); // api end point add
        const data = await res.json();
        setAddress(data); // api returns array
      }catch(error) {
        console.error("Failed to fetch addresses:", error);
      }
    };
    fetchAddresses();
  },[]);
 

  const handleClick = () => {
    setIsopen((prev) => !prev)
  };

  

  return (
        <div className="flex flex-col gap-[2vw]">
  <div className="d">
    {addresses && addresses.length > 0 ? (
    addresses.map((addr) => (
      <AddressCard
        key={addr.id}
        {...addr}
        isSelected={selectedAddressId === addr.id}
        onDeliverHere={() => setSelectedAddressId(addr.id)}
        onChange={() => setSelectedAddressId(null)}
        onDelete={() => setAddresses(addresses.filter((a) => a.id !== addr.id))}
      />
    ))
  ) : (
    <p className="text-gray-500 text-sm">No addresses found</p>
  )}
  </div>
  <AddressAddAndForm isAddress={addresses.length > 0} />
</div>

  );
}

export default AddressSection