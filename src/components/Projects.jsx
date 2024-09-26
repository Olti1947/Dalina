
import React from 'react'
import CustomSlider from './CustomSlider';
const imagesPoppi = require.context('../assets/project-images/poppi', true)
const imageListPoppi = imagesPoppi.keys().map(image => imagesPoppi(image));
const imagesChickIt = require.context('../assets/project-images/chickit', true)
const imageListChickIt = imagesChickIt.keys().map(image => imagesChickIt(image));
const imagesZara = require.context('../assets/project-images/zara', true)
const imageListZara = imagesZara.keys().map(image => imagesZara(image));
const imagesGlowySkin = require.context('../assets/project-images/glowyskin', true)
const imageListGlowySkin = imagesGlowySkin.keys().map(image => imagesGlowySkin(image));
const imagesPecsoft = require.context('../assets/project-images/pecsoft', true)
const imageListPecsoft = imagesPecsoft.keys().map(image => imagesPecsoft(image));
const imagesBershka = require.context('../assets/project-images/bershka', true)
const imageListBershka = imagesBershka.keys().map(image => imagesBershka(image));


const Projects = () => {
  return (
    <div className={` relative grid-cols-3 grid py-20 gap-5 min-w-52 px-5 before:content-['WORK'] border-2 rounded-lg border-stone-300 before:absolute before:top-[-2.5%] max-md:before:top-[-1.5%] max-md:items-center before:left-36 before:z-10 max-md:before:left-[25%] max-md:grid-cols-1 before:bg-white before:font-hero before:text-7xl before:font-bold`}>
<CustomSlider href = 'https://www.behance.net/gallery/208408163/poppi-drinks-social-media-posts' bgImage = 'poppi'>
  {imageListPoppi.map((image,index)=>{
    return <div><img width = {100} src = {image}></img></div>
  })}
</CustomSlider>
<CustomSlider href={'https://www.behance.net/gallery/208410151/chickit'} bgImage = 'chickit'>
  {imageListChickIt.map((image,index)=>{
    return <div><img src = {image}></img></div>
  })}
</CustomSlider>
<CustomSlider href={'https://www.behance.net/gallery/208407951/Zara-home'} bgImage = 'zara'>
  {imageListZara.map((image,index)=>{
    return <div><img src = {image}></img></div>
  })}
</CustomSlider>
<CustomSlider href={'https://www.behance.net/gallery/208408259/glowy-skin'} bgImage = 'glowy'>
  {imageListGlowySkin.map((image,index)=>{
    return <div><img src = {image}></img></div>
  })}
</CustomSlider>
<CustomSlider href={'https://www.behance.net/gallery/208710001/Pecsoft'} bgImage = 'pecsoft'>
  {imageListPecsoft.map((image,index)=>{
    return <div><img src = {image}></img></div>
  })}
</CustomSlider>
<CustomSlider href={'https://www.behance.net/gallery/208799637/Carousel-for-Instagram'} bgImage = 'pecsoft'>
  {imageListBershka.map((image,index)=>{
    return <div><img src = {image}></img></div>
  })}
</CustomSlider>

</div>

  )
}

export default Projects