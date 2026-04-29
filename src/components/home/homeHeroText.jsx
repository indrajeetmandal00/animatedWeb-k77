import React from 'react'
import Video from './video'
const homeHeroText = () => {
    return (
        <div className="font-[font1] pt-5 text-center">
            <div className='text-[9.5vw] uppercase flex justify-center items-center leading-[8vw] '>L'étincelle</div>
            <div className='text-[9.5vw] uppercase flex justify-center items-center leading-[8vw] '>qui
                <div className='relative mx-[1.5vw] h-[7vw] w-[16vw] mb-[1.5vw] flex-none overflow-hidden rounded-full '>
                   
                     <Video/>
                
                </div>
                génère</div>
            <div className='text-[9.5vw] uppercase flex justify-center items-center leading-[8vw] '>la créativité</div>
        </div>
    )
}

export default homeHeroText
