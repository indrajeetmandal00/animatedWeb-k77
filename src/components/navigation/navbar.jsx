import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'


const Navbar = ({ setIsNavOpen }) => {

    const greenNavRef = useRef(null);
    const iconRef = useRef(null);

    const { contextSafe } = useGSAP(); //contextSafe is used to call handleMouseEnter funxtion in react

    const handleMouseEnter = contextSafe(() => {
        gsap.to(greenNavRef.current, { top: 0, duration: 0.3, ease: 'power2.out' });
        gsap.to(iconRef.current, { color: 'black', duration: 0.3, ease: 'power2.out' });
    });

    const handleMouseLeave = contextSafe(() => {
        gsap.to(greenNavRef.current, { top: '-100%', duration: 0.3, ease: 'power2.inOut' });
        gsap.to(iconRef.current, { color: '#D3FD50', duration: 0.3, ease: 'power2.inOut' });
    });

    return (
        <div className='z-[999] w-full flex fixed top-0 items-start justify-between'>

            <div className='p-4'>
                <Link to="/" className='w-20 block cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 103 44">
                        <path fillRule="evenodd" d="M35.144,8.449H58.691H58.691H35.144H35V0H73Z M20.002,0L8.834,25.343L18.488,25.343L29.573,0Z M102.809,16.895Z M0,43.928H8.786V0.006H0Z M58.685,8.449L48,44L55,44L67,8L88,8L77,44L85,44L96,8L98,0V1H78 M96,1Z M18.469,25.344L26.705,43.928L36.276,43.928L28.168,25.338Z"></path>
                    </svg>
                </Link>
            </div>


            <div
                onClick={() => setIsNavOpen(true)}
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                className='bg-black h-13 w-[17vw] relative overflow-hidden cursor-pointer'>

                <div className='bg-black h-full w-full absolute top-0'></div>
                <div ref={greenNavRef} className='bg-[#D3FD50] h-full w-full absolute top-[-100%]'></div>
                <div className='relative z-10 flex h-full w-full items-center justify-end pointer-events-none'>
                    <i ref={iconRef} className="ri-menu-3-fill text-3xl text-white scale-x-500 mr-6"></i>
                </div>

            </div>
        </div>

    )
}

export default Navbar
