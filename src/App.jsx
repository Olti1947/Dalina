import Hero from './components/Hero'
import About from './components/About';
import Card from './components/Card';
import Projects from './components/Projects';
import Footer from './components/Footer';
import photoshop from './assets/photoshop-logo.png'
import ilustrator from './assets/ilustrator-logo.png'
import figma from './assets/figma-logo.png'
import PreLoader from './components/PreLoader';
import { useState,useEffect } from 'react';

function App() {
  const [loading,setLoading] = useState(true)
  
useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  },2500)
},[])

  return (
    <>
    
   { loading && <PreLoader></PreLoader>}
    <main>
      <Hero />
    </main>
    <section className='max-w-screen-2xl flex-col m-auto select-none'>
      <About />
      <div className='flex px-20 gap-10 max-md:flex-col mt-16'>
      <Card content={[photoshop,ilustrator,figma]} image={true} />
      <Card className = 'cols-span-2' content={['Advertising','Architecture','Entertainment','Fashion', 'Food and Beverage', 'Healthcare', 'Manufacturing', 'Non-Profit Organizations', 'Retail', 'Technology', 'Travel and Tourism']} />
      </div>
    </section>
    <section className='max-w-screen-2xl m-auto mt-52'>
<Projects />
    </section>
    <section className='mt-28 max-w-screen-2xl m-auto pb-6'>
      <Footer />
    </section>
    </>
  );
}

export default App;
