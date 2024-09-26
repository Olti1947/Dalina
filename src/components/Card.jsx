import React from 'react'

const Card = ({content,image}) => {
  
  if(image){
    return (
        <>
   <div className={` relative flex justify-evenly items-center gap-5 py-10 min-w-52 px-5 before:content-['Tools'] border-2 rounded-lg border-stone-300 before:absolute before:top-[-13%] max-md:before:top-[-15%] before:left-14 before:z-10 before:bg-white before:font-hero before:text-4xl before:font-bold`}>
        {content.map((item,index)=><div className="hover:scale-110 transition-transform duration-300 ease-in-out"><img src={item} key = {index} alt="" /></div>
        )}
    </div>
    </>
  )
}

return(
    <div className={`max-md:mt-5 relative flex-wrap flex gap-2 p-10 border-2 rounded-lg border-stone-300 before:content-['Industries'] before:absolute before:top-[-18%] before:left-20 before:bg-white before:font-hero before:text-4xl before:font-bold max-md:before:top-[-5%]`}>
    {content.map((item,index)=>{
        if(index!== content.length - 1) {return <span className='text-xl font-hero hover:scale-110 transition-all duration-300 ease-in-out hover:mx-2 hover:font-bold' key={index}>{item} |</span>}
        else{
            return <span className='text-xl font-hero hover:scale-110 transition-all duration-300 ease-in-out hover:mx-2 hover:font-bold' key={index}>{item}</span>
        }
    }
    )}
</div>
)
}

export default Card