import React from 'react'
import Nav from '../../components/nav/Nav'
import PaymentCard from '../../components/cards/PaymentCard'
import ProfileSection from './ProfileSection'
import AddressSection from './AddressSection'

function ProfileAndAddress() {
  return (
    <div className='w-full min-h-[80vh] bg-[#0000000D] relative pt-[12.22%] pl-[3.12%] pr-[6.39%] pb-[2vw]'>
      <Nav />
      <div className="w-full flex justify-between bg-amber mb-[2vw]">
        <div className="w-[62.62%] flex flex-col gap-[2vw] ">
          <ProfileSection />
          <AddressSection />
        </div>
        <div className="w-[33.77%] aspect-[440/530]">
          <PaymentCard />
        </div>
      </div>
    </div>
  )
}

export default ProfileAndAddress