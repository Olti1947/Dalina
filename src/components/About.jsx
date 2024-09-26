import { useState } from 'react'
import person from '../assets/portofolio-photo.png'

const About = () => {
  const [button,setButton] = useState(false)
 
  function handleButtonOver(){
setButton(b=>!b)
  }
  
  function handleButtonOut(){
    setButton(false)
  }

  return (
    <>
    <div className='flex p-10 justify-evenly items-center w-full max-md:flex-col'>
<div onMouseOver = {handleButtonOver} onMouseOut = {handleButtonOut} className=" relative before:content-[''] before:w-full before:h-[50%] before:bottom-0 before:absolute before:bg-gradient-to-b before:from-transparent before:to-white"><img src={person} alt="" /></div>
   <div onMouseOver = {handleButtonOver} onMouseOut = {handleButtonOut} className='flex-col justify-evenly gap-4 max-md:text-center '>
    <h3 className='text-3xl font-bold font-hero'>Hi! I'm Dalina</h3><br />
    <span className='text-2xl font-hero font-normal'>I'm a graphic designer with a passion for making things look good. I'm also pretty <br /> funny, so if you're looking for someone to design your next marketing campaign, <br /> you've come to the right place. Just don't expect me to take myself too seriously.</span><br /><br />
   <span className='text-2xl font-hero font-normal'>I am a creative and innovative thinker with a strong attention to detail. I am always <br /> looking for new ways to improve my skills and knowledge.</span>
   <br /> 
<a href="https://www.behance.net/dalinzejnullahu22" target='_blank'><button class={`button-style group mt-10 ${button? 'opacity-100' : 'opacity-0'} transition-opacity`}>
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
CONTACT ME
</span>
</button>
</a>
   </div>
    </div>
  </>
  )
}

export default About