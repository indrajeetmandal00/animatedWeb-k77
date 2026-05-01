import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'


const stairs = (props) => {

  const coverRef = useRef(null);
  const pageRef = useRef(null);

  const location = useLocation(); //added location.pathname to the useEffect dependency array. This ensures the transition triggers every time you navigate to a new page.

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.set('.stairs', { height: 0, yPercent: 0 }) //setting initially position
      .set(pageRef.current, { opacity: 0 })
      .to('.stairs', {    //stairs coming down y:0
        height: '100%',
        duration: 0.55,
        stagger: { amount: -0.25 },
        ease: 'power2.out',
      })
      .to('.stairs', { //going more down y:100 
        yPercent: 100,
        duration: 0.65,
        stagger: { amount: -0.25 },
        ease: 'power2.inOut',
      })
      .from(pageRef.current, {
        opacity: 0,
        scale: 1.2,
        delay:-0.5
      })
  }, { scope: coverRef, dependencies: [location.pathname] });

  return (
    <div>
      <div className='pointer-events-none fixed top-0 left-0 h-screen w-full'>
        <div ref={coverRef} className='pointer-events-none fixed top-0 left-0 flex h-screen w-full overflow-hidden'>
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div> 
            {/* display the next page in transition after above animation */}
    </div>
  )
}

export default stairs
