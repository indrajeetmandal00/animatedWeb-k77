import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'

const MarqueeLink = ({ title, to, onClick }) => {        //Because the GSAP animation was only pointing to a single reference, it couldn't animate all four of them independently.
    //fix this the proper "React way" MarqueeLink
    const marqueeRef = useRef(null);
    const tweenRef = useRef(null);      //tweenRef just saves the ani to be reused in next function 

    const { contextSafe } = useGSAP(() => {
        tweenRef.current = gsap.to(marqueeRef.current, {
            xPercent: -50,
            repeat: -1,
            duration: 10,
            ease: 'none',
            paused: true
        });
    }, []); // while you are hovering over the menu (like a background state update, route change, etc.), useGSAP will clean up the old animation!

    const handleMouseEnter = contextSafe(() => {
        tweenRef.current && tweenRef.current.play();
    });

    const handleMouseLeave = contextSafe(() => {
        tweenRef.current && tweenRef.current.pause();
    });

    return (
        <Link to={to} onClick={onClick} className='block link group border-y-1 border-white relative overflow-hidden cursor-pointer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h1 className='leading-[8vw] pt-2 text-center transition-opacity duration-300 ease-in-out group-hover:opacity-0'>{title}</h1>
            <div className='w-full h-full absolute top-0 left-0 bg-[#D3FD50] flex items-center overflow-hidden -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10'>
                <div ref={marqueeRef} className='flex items-start w-max text-black'>
                    <div className='flex items-start gap-8 pr-8'>
                        <h2 className='whitespace-nowrap leading-[8vw] pt-2'>Pour Tour</h2>
                        <img className='h-25 w-80 shrink-0 self-center object-cover rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                        <h2 className='whitespace-nowrap leading-[8vw] pt-2'>Pour Voir</h2>
                        <img className='h-25 w-80 shrink-0 self-center object-cover rounded-full' src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" alt="" />
                    </div>
                    <div className='flex items-start gap-8 pr-8'>
                        <h2 className='whitespace-nowrap leading-[8vw] pt-2'>Pour Tour</h2>
                        <img className='h-25 w-80 shrink-0 self-center object-cover rounded-full' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />
                        <h2 className='whitespace-nowrap leading-[8vw] pt-2'>Pour Voir</h2>
                        <img className='h-25 w-80 shrink-0 self-center object-cover rounded-full' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

const FullScreenNav = ({ isNavOpen, setIsNavOpen }) => {
    const navRef = useRef(null);
    const menuContentRef = useRef(null);
    const isInitialRender = useRef(true);

    useGSAP(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }

        const tl = gsap.timeline();

        if (isNavOpen) {
            gsap.set(navRef.current, { top: 0 }); // Instantly snap wrapper to screen
            gsap.set(menuContentRef.current, { opacity: 0 }); // Hide menu items initially

            tl.set('.nav-stairs', { height: 0, yPercent: 0 })
                .to('.nav-stairs', { height: '100%', duration: 0.5, stagger: { amount: 0.25 }, ease: 'power3.inOut' })
                .set(menuContentRef.current, { opacity: 1 }) // Reveal menu behind stairs
                .to('.nav-stairs', { yPercent: 100, duration: 0.5, stagger: { amount: 0.25 }, ease: 'power3.inOut' });
        } else {
            tl.set('.nav-stairs', { height: 0, yPercent: 0 })
                .to('.nav-stairs', { height: '100%', duration: 0.5, stagger: { amount: 0.25 }, ease: 'power3.inOut' })
                .set(menuContentRef.current, { opacity: 0 }) // Hide menu behind stairs
                .to('.nav-stairs', { yPercent: 100, duration: 0.5, stagger: { amount: 0.25 }, ease: 'power3.inOut' })
                .set(navRef.current, { top: '-100%' }); // Safely hide wrapper back off-screen
        }
    }, { dependencies: [isNavOpen] });

    return (
        <div ref={navRef} className='fullscreennav h-screen w-full fixed top-[-100%] z-[1000] text-white font-[font2] text-[8vw] uppercase'>
            <div ref={menuContentRef} className='absolute inset-0 bg-black py-34 opacity-0'>
                <div className='absolute flex top-0 left-0 item-start justify-center z-50 pointer-events-none'>
                    <div className='p-4'>
                        <div className='w-20'>
                           <svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 103 44">
                        <path fillRule="evenodd" d="M35.144,8.449H58.691H58.691H35.144H35V0H73Z M20.002,0L8.834,25.343L18.488,25.343L29.573,0Z M102.809,16.895Z M0,43.928H8.786V0.006H0Z M58.685,8.449L48,44L55,44L67,8L88,8L77,44L85,44L96,8L98,0V1H78 M96,1Z M18.469,25.344L26.705,43.928L36.276,43.928L28.168,25.338Z"></path>
                    </svg>
                        </div>
                    </div>
                </div>

                <Link to="/" onClick={() => setIsNavOpen(false)} className='cross absolute top-0 right-0 h-13 w-[17vw] flex items-center justify-end z-[999] cursor-pointer pointer-events-auto'>
                    <i className="ri-close-large-line text-4xl mr-6 text-white hover:text-[#D3FD50] transition-colors duration-300"></i>
                </Link>

                <div className='all-links'>
                    <MarqueeLink title="Projects" to="/projects" onClick={() => setIsNavOpen(false)} />
                    <MarqueeLink title="Agence" to="/agence" onClick={() => setIsNavOpen(false)} />
                    <MarqueeLink title="contact" to="/contact" onClick={() => setIsNavOpen(false)} />
                    <MarqueeLink title="Blogue" to="/blogue" onClick={() => setIsNavOpen(false)} />
                </div>
            </div>

            <div className='pointer-events-none absolute top-0 left-0 flex h-screen w-full overflow-hidden z-[1001]'>
                <div className='nav-stairs h-full w-1/5 bg-black'></div>
                <div className='nav-stairs h-full w-1/5 bg-black'></div>
                <div className='nav-stairs h-full w-1/5 bg-black'></div>
                <div className='nav-stairs h-full w-1/5 bg-black'></div>
                <div className='nav-stairs h-full w-1/5 bg-black'></div>
            </div>
        </div>
    )
}

export default FullScreenNav
