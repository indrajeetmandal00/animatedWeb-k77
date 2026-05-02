import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


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
                <div className='w-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 103 44">
                        <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg></div>
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
