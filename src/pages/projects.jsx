import React, { useRef } from 'react'
import ProjectCard from '../components/projects/projectCard'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = () => {

  const projectArray = [{
    image1: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
    image2: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b'
  },

  {
    image1: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
    image2: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'
  },

  {
    image1: 'https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a',
    image2: 'https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5'
  },

  {
    image1: 'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
    image2: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479'
  },

  {
    image1: 'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47',
    image2: 'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f'
  },

  {
    image1: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda',
    image2: 'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14'
  },

  {
    image1: 'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124',
    image2: 'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757'
  },

  {
    image1: 'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000',
    image2: 'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821'
  }

  ];



  useGSAP(() => {

    gsap.from('.pair', {
      height: '100px',
      stagger:
        { amount: 0.3 },
      scrollTrigger: {
        trigger: '.container',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    });
  });



  return (
    <div className='p-4'>
      <div className='pt-[45vh]'>
        <div className='font-[font2] text-[9.5vw] uppercase'>Projets<sup className="text-[3.5vw] align-super">16</sup></div>
      </div>

      <div className='-mt-12 container '>
        {projectArray.map((elem, index) => (
          <div key={index} className='pair h-[500px] w-full mb-4 flex gap-4 p-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        ))}
      </div>

      {/* Footer / Contact Button */}
      <div className='mt-32 w-full border-t-2 border-black/20 pt-12 pb-8 flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='text-sm uppercase tracking-widest text-gray-500'>
          © {new Date().getFullYear()} K77. Tous droits réservés.
        </div>
        <a
          href="/contact"
          className='text-xl uppercase border-2 border-white px-8 py-3 rounded-full hover:bg-[#D3FD50] hover:border-[#D3FD50] hover:text-black transition-colors tracking-widest font-bold'
        >
          ❤️Contact
        </a>
      </div>

    </div>
    
  )
}

export default projects
