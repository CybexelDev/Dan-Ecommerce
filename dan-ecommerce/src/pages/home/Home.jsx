import React from 'react'
import Hero from './homeitems/Hero'
import Nav from '../../components/nav/Nav'
import MostPopular from './homeitems/MostPopular'
import Testimonal from './homeitems/Testimonal'
import Collections from './homeitems/Collections'
import VideoSection from './homeitems/VideoSection'

function Home() {
  return (
    <div className='px-[3.8%] pt-[3%]  bg-white w-[100%] h-[100]'>
      <div className="pb-[4%]">
        <Hero />
      </div>
      <div className="">
        <MostPopular />
      </div>
      <div className="">
        <Testimonal />
      </div>
      <div className="">
        <Collections />
      </div>
      <div className="">
        <VideoSection />
      </div>
    
    </div>
    
  )
}

export default Home