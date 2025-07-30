import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../../assets/assets'
import Navbar from '../Navbar';
import Moment from 'moment';
import Footer from '../Footer';
import Loader from '../Loader';


const Blog = () => {

  const {id} =useParams()

 const [data, setData] = useState(null)
 const [comments, setComments] = useState([])

 const [name, setName] = useState(null)

 const [content, setContent] = useState(null)

 const fetchBlogData = async ()=>{

  const data = blog_data.find(item => item._id ===id)

  setData(data)
 }


const fetchcomment = async()=>{


  setComments(comments_data)
}

const addComment = async (e)=>{


  e.preventdefault
 }


 useEffect(()=>{

  fetchBlogData()
  fetchcomment()
 },[])


  return data ?  (

    <div className ='relative'>
      <img src = {assets.bg_gredient} alt="bg" className='absolute -top-50 -z-1 opacity-10'/>

      <Navbar/>

      <div className='text-center mt-20 text-gray-600'>

        <p className='text-primary py-4 font-medium'>Published on {Moment().format('MMMM Do YYYY')}</p>
        <h1 className='text2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
         <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</h2>
         <p className='inline-block py-1 px-4 rounded-full mb-6 
         border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>olawnmi </p>
      </div>



      <div className='mx-5 max-w-2xl  md:mx-auto my-10 mt-12'>

        <img src={data.image} alt="" className='rounded-3xl mb-6 '/>
      <div className='use-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{__html: data.description}}>

      </div>

      {/*comments section*/}

      <div className='mt-14 mb-10 max-w-3xl mx-auto'></div>

      <p className ='font-semibold mb-4'>comments ({comments.length})</p>
      <div className='flex flex-col gap-6'>
        {comments.map((item, index)=>(
          <div key={index} className='relative bg-primary/2 border border-primary/5 max-w1-xl p-4 rounded text-gray-600'>
             <div>
          <img src={assets.blog_messi_1} alt="" className='w-6'/>
          <p className='font-medium'>{item.name}</p>
        </div>


        <p className= 'text-sm max-w-md ml-8'>{item.content}</p>

        <div className ='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>
          {Moment(item.createdAT).fromNow()}
        </div>

        </div>
        ))}
      </div>
      </div>
{/* comment section */}
      <div className ='max-w-3xl mx-auto'>
        <p className ='font-semibold mb-4'>Comments</p>

<form onSubmit ={addComment} className ='flex flex-col items-start gap-4 max-w-lg'>

  <input onChange ={(e)=> setName (e.target.value)}valur ={name}  type ='text' placeholder ='name' required className ='w-full p-2 border border-gray-300 rounded outline-none'/>
  <textarea  onChange ={(e)=> setContent (e.target.value)}valur ={content}  placeholder = 'comment' className ='w-full p-2 border border-gray-300 rounded outline-none h-48'> </textarea>
  
<button type ='submit' className ='bg-primary text-white rounded p-2 px-8 hover:scale-102 trnsition-all cursor-ponter'> submit</button>


</form>

      </div>


      {/* share button */}

      <div className = 'my-24 max-w-3xl mx-auto'>

<p className = 'font-semibold my-4'>Share post on your socials</p>






<div className= 'flex gap-4'>

  <img src={assets.fbicon} width={20} alt="" />
 <img src={assets.Xicon} width={20} alt="" />
  <img src={assets.youtubeicon} width={20} alt="" />

   <img src={assets.instgramicon} width={20} alt="" />
</div>
</div>

<Footer/>
      </div>
      
    
  
  ) : <Loader/>
}


export default Blog;