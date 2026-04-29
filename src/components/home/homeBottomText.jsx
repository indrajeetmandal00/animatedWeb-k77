import React from 'react'
import { Link } from 'react-router-dom'

const homeBottomText = () => {
    return (
        <div className='font-[font2] flex justify-center items-center gap-2'>
            <Link to='/projects' 
            className='text-[6.5vw] leading-[7vw] uppercase border-2 border-white px-4 py-2 rounded-full
            hover:border-[#D3FD50] hover:text-[#D3FD50]'>Projects</Link>  
                
            <Link to='/agence' 
            className='text-[6.5vw] leading-[6vw] uppercase border-2 border-white px-4 py-2 rounded-full
             hover:border-[#D3FD50] hover:text-[#D3FD50]'>Agence</Link>
        </div>
    )
}

export default homeBottomText
