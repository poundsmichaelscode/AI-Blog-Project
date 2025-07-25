import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../../assets/assets'
import Navbar from '../Navbar';
import Moment from 'moment';
import moment from 'moment';

const Blog = () => {

  const {id} =useParams()

 const [data, setData] = useState(null)
 const [comments, setComments] = useState([])

 const fetchBlogData = async ()=>{

  const data = blog_data.find(item => item._id ===id)

  setData(data)
 }


const fetchcomment = async()=>{


  setComments(comments_data)
}




 useEffect(()=>{

  fetchBlogData()
  fetchcomment()
 },[])


  return data ?  (

    <div className ='relative'>
      <img src = {assets.bg_gredient} alt="bg" className='absolute -top-50 -z-1 opacity-50'/>

      <Navbar/>

      <div className='text-center mt-20 text-gray-600'>

        <p className='text-primary py-4 font-medium'>Published on {Moment().format('MMMM Do YYYY')}</p>
        <h1 className='text2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
         <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</h2>
         <p className='inline-block py-1 px-4 rounded-full mb-6 
         border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>olawnmi </p>
      </div>



      <div className='mx-5 max-w-2xl  md:mx-auto my-10 mt-12'>

        <img src={data.image} alt="" className='rounded-3xl mb-6'/>
      <div className='use-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{__html: data.description}}>

      </div>

      {/*comments section*/}

      <div className='mt-14 mb-10 max-w-3xl mx-auto'></div>

      <p>comments ({comments.length})</p>
      <div className='flex flex-col gap-6'>
        {comments.map((item, index)=>(
          <div key={index} className='relative bg-primary/2 border border-primary/5 max-w1-xl p-4 rounded text-gray-600'>
             <div>
          <img src={assets.blog_messi_1} alt="" className='w-6'/>
          <p className='font-medium'>{item.name}</p>
        </div>
        <p>{item.content}</p>

        <div>
          {Moment(item.createdAT).format('MMMM Do YYYY')}
        </div>

        </div>
        ))}
      </div>
      </div>
    </div>
    
  ) : <div>loading....</div>
}

export default Blog