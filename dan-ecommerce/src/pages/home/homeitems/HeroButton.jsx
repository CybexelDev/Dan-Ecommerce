import React from 'react'
import leftarrow from "../../../assets/images/home/leftarrow.png"
import rightarrow from "../../../assets/images/home/rightarrow.png"

function HeroButton() {
  return (
    <div className='w-full h-full flex items-center justify-between'>
      <img src={leftarrow} alt="arrow btn" className='h-full'/>
      <img src={rightarrow} alt="arrow btn" className='h-full' />
    </div>
  )
}

export default HeroButton