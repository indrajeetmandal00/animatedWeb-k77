import React from 'react'

const projectCard = () => {
    return (
        <div>
            <div className=' h-[350px] w-full mb-4 flex gap-4 p-2'>
                <div className='relative w-1/2 h-full group transition-all duration-300 rounded-none hover:rounded-[50px] overflow-hidden group cursor-pointer'>
                    <img className='w-full h-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e" alt="" />
                    <div className='absolute top-0 left-0 opacity-0 group-hover:opacity-[1] h-full w-full bg-black/10 flex items-center justify-center'>
                        <h2 className='uppercase text-5xl font-[font2] border-2 py-2 px-6 rounded-full'>Voir le projet</h2>
                    </div>
                </div>

                <div className='relative w-1/2 h-full group transition-all duration-300 rounded-none hover:rounded-[50px] overflow-hidden group cursor-pointer'>
                    <img className='w-full h-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e" alt="" />
                    <div className='absolute top-0 left-0 opacity-0 group-hover:opacity-[1] h-full w-full bg-black/10 flex items-center justify-center'>
                        <h2 className='uppercase text-5xl font-[font2] border-2 py-2 px-6 rounded-full'>Voir le projet</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default projectCard
