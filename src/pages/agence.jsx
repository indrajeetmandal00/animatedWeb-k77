import gsap from 'gsap';
import React, { useRef, useEffect} from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const imgDivRef = useRef(null);
  const imgRef = useRef(null);

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
     

            
  useEffect(() => {
    if (!imgDivRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imgDivRef.current, {
        scrollTrigger: {
          trigger: imgDivRef.current,
          start: 'top 36%',
          end: 'top -160%',
          scrub: true,
          pin: true,
          onUpdate: (elem) => {
            const progress = elem.progress;
            const imgIndex = Math.floor(progress * imgArray.length) % imgArray.length;
            imgRef.current.src = imgArray[imgIndex];
          }
        }
      });
    }, imgDivRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
    <div className='section1'>
        <div ref={imgDivRef} className='h-[20vw] w-[15vw] absolute top-60 left-[30vw] rounded-3xl overflow-hidden'>
            <img ref={imgRef} className='w-full h-full object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>

        <div className='mt-[55vh] relative z-1'>
            <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>Soixan7e <br /> Douze</h1>
        </div>
        <div className='pl-[40%] mt-20 relative z-1'>
        <p className='text-6xl '> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
        </div>
    
    </div>
    <div className='section2 h-screen'>

    </div>
    </div>
  )
}

export default Agence
