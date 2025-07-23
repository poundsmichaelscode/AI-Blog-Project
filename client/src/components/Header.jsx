import React from 'react'
import { assets } from '../assets/assets'

 
const Header = () => {
  return (
    <div className = 'mx-8 sm:mx-16 xl:mx-24 relative'>

<div className = 'text-center mt-20 mb-8'> 

<div className='inline-flex items-center justify-center center gap-4 px-6 py-1.2 mb-4 border border-primary/40 rounded-full text-sm text-primary
'>

<p>AI Feature Integrated </p>
<img src={assets.Ai_icon} className= 'w-1.2'   alt= "icon"  />

</div>
     <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-500'>  Own Your  < span className='text-primary'> Blogging</span> <br />
      Platform</h1>

      <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs'>
        A blog is a type of web 8site, often informal 
        and conversational, where individuals or groups regularly publish content, usually in reverse chronological order. These posts can cover a wide range of topics, from personal experiences to professional insights, 
        and can include text, images, videos, and other media.
      </p>


      <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-500 bg-white rounded overflow-hidden'>
        <input type="text"  placeholder='Search'required   className ='w-full pl-4 outline-none' />
        <button type='submit' className='bg-primary text-black px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'> Search</button>
      </form>

</div>
  
<img src={assets.bg_gredient} alt='bg' className='absolute -top-50 -z-1 opacity-4' />
        
    </div>
  )
    
}

export default Header