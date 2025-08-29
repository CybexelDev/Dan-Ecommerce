import React from 'react'
import mp1 from "../../../assets/images/mostpopular/mp1.png"
import mp2 from "../../../assets/images/mostpopular/mp2.png"
import mp3 from "../../../assets/images/mostpopular/mp3.png"
import MostPopularCard from '../../../components/cards/MostPopularCard'

function MostPopular() {
  return (
    <div className='most-popular flex flex-col justify-between  w-full aspect-[1440/637] mb-[2vw] '>
        {/* Header  Section  */}
        <div className=" h-[10%] w-full flex">
            <div className="w-full  flex-col justify-start px-1">
                <h3 className='text-[1.5vw]'>Most Popular</h3>
                <p className='text-[1vw]'>Showcase your most popular products, front and center.</p>
            </div>
            <div className="w-full  flex text-[1.3vw] items-center justify-end px-4">
                <a href="#">View All &rarr;</a>
            </div>
        </div>
        {/* End of Header Section */}

        {/* Starting Card Section */}
        <div className=" w-full flex justify-between aspect-[1440/541] ">
  
          <MostPopularCard
            image={mp1}
            title="Card Title 1"
            offer="20% off"
            price="Third sample card description."
          />
          <MostPopularCard
            image={mp2}
            title="Card Title 2"
            offer="10%"
            price="Third sample card description."
          />
          <MostPopularCard
            image={mp3}
            title="Card Title 3"
            offer="10%"
            price="Third sample card description."
          />

        </div>

    </div>
  )
}

export default MostPopular