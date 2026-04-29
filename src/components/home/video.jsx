import React from 'react'
import heroVideo from '../../assets/69496b2d.mp4'

const Video = () => {
  return (
    <div className='relative h-full w-full rounded-[inherit] overflow-hidden '>
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        className='absolute inset-0 block h-full w-full object-cover'
      />
    </div>
  )
}

export default Video
