import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px lg:px-24 xl:px-32 bg-primary/3'>

<div className='flex flex-col md:flex-row items-start-between gap-8 py-10 border-b border-gray-500/30 text-gray-500'>



 
<div>
<img src ={assets.logo} alt ='my fotter' className='w-32 sm:w-44'/>
<p className='max-w-[410px] mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, tempore.consectetur adipisicing elit. Modi, tempore</p>
</div>




<div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>

{footer_data.map ((section, index)=>(

    <div key={index}> 
    <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>


<ul className='text-sm space-y-1'>
    {section.links.map((link,i)=>(

        <li key={i}>
            <a href="#" className='hover:underline transition'>{link}</a>


        </li>
    ))}
</ul>
    </div>


))}

</div>

</div>




<p className='py-4 text-center text-sm md:text-base text-gray-600'>copyrit @ poundsmicale blo -All rit reserved.</p>



    </div>
    

    


  )
}

export default Footer