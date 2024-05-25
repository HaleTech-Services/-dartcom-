import React from 'react'
import HomeBanner from './homeBanner/HomeBanner'
import VisionMission from './homeVision/VisionMission'

const HomePage = () => {
  return (
    <div className='w-full h-auto px-[80px] '>
        <HomeBanner/>
        <VisionMission/>
    </div>
  )
}

export default HomePage