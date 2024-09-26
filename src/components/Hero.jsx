import { useState,useEffect } from 'react'
import brush from '../assets/brush.png'
import mobile from '../assets/mobile-app.png'
import pen from '../assets/pen-tool.png'
import backgroundVideo from '../assets/background-wave.mp4'

const ICON_ARRAY = [brush,mobile,pen]

const Hero = () => {
    
        const [currentIndex, setCurrentIndex] = useState(0);
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % ICON_ARRAY.length);
          }, 1000);
      
          return () => clearInterval(intervalId);
        }, []);

    return (
   <>
   <video className="absolute w-full h-full object-cover" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute w-full h-full bg-black opacity-90"></div>
    <div className="relative h-screen flex justify-center items-center">
        <div className='flex-col justify-start items-start'>
        <span className="font-hero text-2xl max-md:text-sm text-white font-bold select-none">Dalinë Zejnullahu</span> 
        <h1 className="font-hero text-8xl max-md:text-4xl flex gap-2 items-center text-white font-bold select-none">GRAPHIC DESIGNER<span className="font-hero"><img className='w-20 max-md:w-10 animate-spin translate-y-2 shadow-xl-white' src={ICON_ARRAY[currentIndex]} alt="" /></span></h1>
    </div>
    </div>
    </>
  )
}

export default Hero