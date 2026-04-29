import React from 'react'
import Video from '../components/home/video'
import HomeHeroText from '../components/home/homeHeroText'
import HomeBottomText from '../components/home/homeBottomText'

const home = () => {
  return (
    <div>
       
      <div className='h-screen w-screen fixed'>
         <Video/>
      </div>
      <div className='h-screen w-screen relative text-color-white flex flex-col justify-between '>
            <HomeHeroText/>
            <HomeBottomText/>
      </div>
      
    </div>
  )
}

export default home
