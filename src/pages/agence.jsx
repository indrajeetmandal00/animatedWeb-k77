import gsap from 'gsap';
import React, { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const imgArray = [
  "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
  "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
  "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
  "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
  "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
  "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
  "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
  "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
  "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64"
];

const Agence = () => {
  const imgContainerRef = useRef(null); // This will be the element that is absolutely positioned and pinned
  const imgRef = useRef(null);  //imgRef selects the changes to make due to animations

  useGSAP(() => {

    gsap.to(imgContainerRef.current, { // Pin the outer container div
      scrollTrigger: {
        trigger: imgContainerRef.current, // The container itself is now the trigger
        start: 'top 29%',
        end: 'top -170%',
        scrub: true,
        pin: imgContainerRef.current,
            pinSpacing: false,
            pinReparent: true,     //changes the parent temp to body
            pinType: "transform",   //now image getting pinned to screen not the text..para...
            invalidateOnRefresh:true,
        onUpdate: (elem) => {
          const progress = elem.progress; //ret. [0,1]
          const imgIndex = Math.floor(progress * imgArray.length) % imgArray.length;
          imgRef.current.src = imgArray[imgIndex]; // Ensure index is within bounds and doesn't wrap to 0 at the very end
        }
      }
    });
  }, { scope: imgContainerRef });   //clear memory
  

  return (
    <div>
      <div className='section1 relative py-1'>
        {/* This div is now the main container for the image and is the target for pinning */}
        <div ref={imgContainerRef} className='h-[20vw] w-[15vw] absolute z-0 py-1 top-60 left-[30vw] rounded-3xl overflow-hidden'>
          <img ref={imgRef} className='w-full h-full object-cover' src={imgArray[0]} alt="" />
        </div>
      
        
        <div className='mt-[55vh] relative z-999'>
          <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>Soixan7e <br /> Douze</h1>
        </div>
        <div className='pl-[40%] mt-20 relative z-999'>
          <p className='text-6xl '> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
        </div>

      </div>
      <div className='section2 h-screen'>

      </div>
    </div>



  )
}

export default Agence
