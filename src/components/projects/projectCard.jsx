import React from 'react'

const projectCard = (props) => {
    return (
        <>
            <div className='relative w-1/2 h-full group transition-all duration-300 rounded-none hover:rounded-[50px] overflow-hidden group cursor-pointer'>
                <img className='w-full h-full object-cover' src={props.image1} alt="" />
                <div className='absolute top-0 left-0 opacity-0 group-hover:opacity-[1] h-full w-full bg-black/10 flex items-center justify-center'>
                    <h2 className='uppercase text-5xl font-[font2] border-2 py-2 px-6 rounded-full'>Voir le projet</h2>
                </div>
            </div>

            <div className='relative w-1/2 h-full group transition-all duration-300 rounded-none hover:rounded-[50px] overflow-hidden group cursor-pointer'>
                <img className='w-full h-full object-cover' src={props.image2} alt="" />
                <div className='absolute top-0 left-0 opacity-0 group-hover:opacity-[1] h-full w-full bg-black/10 flex items-center justify-center'>
                    <h2 className='uppercase text-5xl font-[font2] border-2 py-2 px-6 rounded-full'>Voir le projet</h2>
                </div>
            </div>
        </>
    )
}

export default projectCard
