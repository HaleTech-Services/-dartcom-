import React from 'react'
import HomeBanner from './homeBanner/HomeBanner'
import VisionMission from './homeVision/VissionMission'
import HomeFaq from './homeFaQ/HomeFaq'
import HomeTestimonial from './homeTestimonial/HomeTestimonial'

const HomePage = () => {
  return (
    <div className='w-full h-auto'>
        <HomeBanner/>
        <VisionMission/>
        <HomeFaq/>
        <HomeTestimonial/>
    </div>
  )
}

export default HomePage