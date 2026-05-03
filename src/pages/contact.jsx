import React from 'react'

const contact = () => {
  return (
    <div className='p-8 min-h-screen flex flex-col pt-[25vh] text-white'>
      <div className='font-[font2] text-[9.5vw] uppercase leading-none mb-16'>
        Contact
      </div>

      <div className='flex flex-col md:flex-row gap-20 w-full max-w-7xl'>
        {/* Informations de contact */}
        <div className='flex-1 flex flex-col gap-10 text-2xl'>
          <div>
            <h2 className='uppercase font-bold mb-2 text-sm tracking-widest text-gray-400'>Nouvelles affaires</h2>
            <a href="mailto:allo@k72.ca" className='hover:text-[#D3FD50] transition-colors'>allo@k72.ca</a>
          </div>

          <div>
            <h2 className='uppercase font-bold mb-2 text-sm tracking-widest text-gray-400'>Emplois</h2>
            <a href="mailto:cv@k72.ca" className='hover:text-[#D3FD50] transition-colors'>cv@k72.ca</a>
          </div>

          <div>
            <h2 className='uppercase font-bold mb-4 text-sm tracking-widest text-gray-400'>Adresse</h2>
            <p className='leading-snug mb-6'>
              Onscreen or in an office.<br />
              Here. There.<br />
              Anywhere.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=525+Av.+Viger+O+Montréal,+QC+H2Z+1G6"
              target="_blank"
              rel="noopener noreferrer"
              className='hover:text-[#D3FD50] transition-colors inline-block leading-relaxed'
            >
              525 Av. Viger O - Suite 400<br />
              Montréal, QC H2Z 1G6 →
            </a>
          </div>
        </div>

        {/* Formulaire */}
        <div className='flex-1'>
          <form className='flex flex-col gap-8'>
            <input
              type="text"
              placeholder="Nom"
              className="bg-transparent border-b-2 border-white/30 pb-3 text-xl focus:outline-none focus:border-[#D3FD50] transition-colors w-full placeholder:text-gray-500"
            />
            <input
              type="email"
              placeholder="Courriel"
              className="bg-transparent border-b-2 border-white/30 pb-3 text-xl focus:outline-none focus:border-[#D3FD50] transition-colors w-full placeholder:text-gray-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="bg-transparent border-b-2 border-white/30 pb-3 text-xl focus:outline-none focus:border-[#D3FD50] transition-colors w-full resize-none placeholder:text-gray-500"
            ></textarea>
            <button
              type="submit"
              className="self-start text-[3vw] md:text-[1.5vw] uppercase border-2 border-white px-8 py-3 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors mt-4 font-[font2]"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>

      {/* Réseaux sociaux / Follow Us */}
      <div className='mt-32 w-full max-w-7xl flex flex-col items-center pb-12'>
        <h2 className='uppercase font-bold mb-6 text-sm tracking-widest text-gray-400'>Follow Us</h2>
        <div className='flex flex-wrap justify-center gap-6 text-lg md:text-xl uppercase tracking-widest font-bold'>
          <a href="#" className='border-2 border-white/50 rounded-full px-8 py-3 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors'>IG</a>
          <a href="#" className='border-2 border-white/50 rounded-full px-8 py-3 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors'>FB</a>
          <a href="#" className='border-2 border-white/50 rounded-full px-8 py-3 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors'>IN</a>
          <a href="#" className='border-2 border-white/50 rounded-full px-8 py-3 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors'>BE</a>
        </div>
      </div>

    </div>
  )
}

export default contact
