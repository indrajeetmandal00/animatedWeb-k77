import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const blogue = () => {
  const categories = [
    { name: "All" },
    { name: "Design" },
    { name: "Tech & AI" },
    { name: "Account" }
  ];

  const posts = [
    {
      title: "Écrire un article sur l’écriture d’un article avec ChatGPT : plongée dans la mise en abyme",
      date: "October 3 2025",
      categories: ["Design", "Tech & AI"],
      image: "https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
    },
    {
      title: "Conseil & relation client: un duo qui ne se briefe pas, qui se construit",
      date: "May 9 2025",
      categories: ["Account"],
      image: "https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
    },
    {
      title: "L'importance du design minimaliste dans les interfaces modernes",
      date: "January 15 2025",
      categories: ["Design"],
      image: "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e"
    },
    {
      title: "Comment l'IA générative transforme notre flux de travail créatif",
      date: "December 12 2024",
      categories: ["Tech & AI", "Design"],
      image: "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
    },
    {
      title: "Pourquoi la gestion de compte est le cœur battant d'une agence",
      date: "November 28 2024",
      categories: ["Account"],
      image: "https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022"
    },
    {
      title: "L'évolution des typographies variables pour le web",
      date: "October 05 2024",
      categories: ["Design", "Tech & AI"],
      image: "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c"
    }
  ];

  const marqueeText = useRef(null);

  // Repeat the text enough times to overflow the screen twice for a seamless loop
  const repeatedText = "Creative Insights • K77 Blog • ".repeat(8);

  useGSAP(() => {
    if (!marqueeText.current) return;

    // Animate the marquee
    const tween = gsap.to(marqueeText.current, {
      xPercent: -50, // Move by half the width (the width of one span)
      repeat: -1,
      duration: 25,
      ease: "linear",
    });

    tween.timeScale(0); // Start stopped

    let scrollTimeout;

    // Change direction on scroll
    ScrollTrigger.create({
      trigger: document.body,
      onUpdate: (self) => {
        gsap.to(tween, { timeScale: self.direction * 1.5, overwrite: true, duration: 0.2 });
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          gsap.to(tween, { timeScale: 0, overwrite: true, duration: 0.5 });
        }, 150);
      },
    });
  });

  const [activeCategory, setActiveCategory] = useState("All");
  const filteredPosts = activeCategory === "All" ? posts : posts.filter(post => post.categories.includes(activeCategory));

  return (
    <div className='p-8 min-h-screen flex flex-col pt-[40vh] text-white'>
      {/* En-tête : Titre & Langues */}
      <div className='flex justify-between items-end mb-20 md:mb-32'>
        <div className='font-[font2] text-[9.5vw] uppercase leading-none'>
          Blogue<sup className="text-[3.5vw] align-super">{filteredPosts.length}</sup>
        </div>
        <div className='text-xl uppercase tracking-widest font-bold mb-4 hidden md:block'>
          <a href="#" className='hover:text-[#D3FD50] transition-colors'>en</a>
          <span className='mx-2'>/</span>
          <a href="#" className='hover:text-[#D3FD50] transition-colors text-gray-400'>fr</a>
        </div>
      </div>

      {/* Marquee */}
      <div className='-mx-8 overflow-hidden py-3 bg-[#D3FD50] mb-6'>
        <div ref={marqueeText} className='flex whitespace-nowrap font-[font2] text-3xl uppercase w-fit text-black'>
          <span className='mx-4'>{repeatedText}</span>
          <span className='mx-4'>{repeatedText}</span>
        </div>
      </div>

      {/* Catégories */}
      <div className='flex justify-end mb-8 w-full'>
        <div className='inline-flex items-center border border-white/20 rounded-full text-xs uppercase tracking-widest text-gray-400'>
          <span className='px-4 py-2 border-r border-white/20 opacity-50 hidden sm:block'>Categories</span>
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-2 hover:text-[#D3FD50] transition-colors ${index !== categories.length - 1 ? 'border-r border-white/20' : ''} ${activeCategory === cat.name ? 'text-[#D3FD50] font-bold' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Liste des articles */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 w-full border-t-2 border-white/30 pt-12'>
        {filteredPosts.map((post, index) => (
          <div key={index} className='group flex flex-col gap-6 cursor-pointer hover:text-[#D3FD50] transition-colors'>
            <div className='w-full aspect-[4/3] overflow-hidden rounded-2xl bg-white/5'>
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                />
              )}
            </div>
            <div className='text-sm uppercase tracking-widest text-gray-400 group-hover:text-[#D3FD50] transition-colors'>
              {post.date}
            </div>
            <div className='font-[font2] text-3xl md:text-4xl uppercase leading-[1.1]'>
              {post.title}
            </div>
            <div className='flex flex-wrap gap-3 items-start text-sm uppercase tracking-widest mt-auto pt-2'>
              {post.categories.map((cat, i) => (
                <span key={i} className='border-2 border-white/30 rounded-full px-4 py-1 group-hover:border-[#D3FD50] transition-colors'>
                  {cat}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer / Contact Button */}
      <div className='mt-32 w-full border-t-2 border-white/30 pt-12 pb-8 flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='text-sm uppercase tracking-widest text-gray-400'>
          © {new Date().getFullYear()} K77. Tous droits réservés.
        </div>
        <a
          href="/contact"
          className='text-xl uppercase border-2 border-white px-8 py-3 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors tracking-widest font-bold'
        >
          ❤️Contact
        </a>
      </div>
    </div>
  )
}

export default blogue
