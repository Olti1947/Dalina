import React from 'react'

const Footer = () => {
  return (
   
   <div className={`max-md:mt-5 relative flex-wrap  flex gap-2 p-10 border-2 rounded-lg border-stone-300 before:content-['Confused?'] before:absolute before:top-[-18%] before:left-20 before:bg-white before:font-hero before:text-4xl before:font-bold max-md:before:top-[-9%] max-md:before:left-[29%]`}>
<div className='flex items-center gap-6 max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center'><p className='text-2xl'>I'd love to chat with you about how I can help. <b>Contact me.</b></p><a href="https://www.behance.net/dalinzejnullahu22" target='_blank'><button className='text-2xl bg-gradient-to-r from-sky-500 to-indigo-500 rounded min-w-64 text-white font-bold px-10 py-5'>✉️ See all projects</button></a></div>
</div>  )
}

export default Footer