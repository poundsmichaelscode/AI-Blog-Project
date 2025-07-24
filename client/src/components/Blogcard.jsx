import React from 'react'
import { useNavigate } from 'react-router-dom'; 

const Blogcard = ({blog}) => {

    const{title, description, category, image, _id} =  blog;


const navigate = useNavigate

 
  return (
    <div onClick= {()=> navigate(`/blog/${_id}`)} className='w-full rounded-lg overflow-hidden shadow hover:scale-103 hover:shadow-primary/25 duration-300 cursor-pointer mt-10'>


  <img src={image} alt="blogimage" className = 'aspect-video' />
  <span className= 'ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs'>{category}</span>


<div className='p-5'> 


<h5 className='mb-2 font-meduim text-gray900'>{title}</h5>

<p className='mb-3 text-xs text-gray-600' dangerouslySetInnerHTML={ {"__html" : description.slice(0,80)}}></p>


 

</div>
  
    </div>
  )
    
}

export default Blogcard