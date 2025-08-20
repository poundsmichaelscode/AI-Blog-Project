import React, { useEffect, useState } from 'react'
import { blog_data } from '../../../assets/assets';
import Blogtableitems from './Blogtableitems';

const ListBlog = () => {


const [blogs, setBlogs] = useState([]);

const fetchBlogs = async () =>{

setBlogs(blog_data)

}


useEffect (()=>{

  fetchBlogs()
,[]})


  return (
    <div
    className='flex-1 pt-5 sm:pt-12 sm:pl-16 bg-blue-200'>

      <h1>All Blogs</h1>

<div className='relative  h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>

<table className='w-full text-sm text-gray-500'>
  <thead className='text-xs text-gray-600 text-left uppercase'>

<tr>


  <th scope = 'col' className='px-2 py-4 xl:px-6'>

#
  </th>

   <th scope = 'col' className='px-2 py-4'>

Blog Title
  </th>

   <th scope = 'col' className='px-2 py-4 max-sm:hidden'>
Date
  </th>

   <th scope = 'col' className='px-2 py-4'>

Status
  </th>

   <th scope = 'col' className='px-2 py-4 px-2 py-4 max-sm:hidden'>

Action
  </th>
</tr>

  </thead>

  <tbody>

{blogs.map((blog, index )=>{

return <Blogtableitems key= {blog._id} blog ={blog}
fetchBlogs = {fetchBlogs}  index = {index + 1}/>
})}

  </tbody>
</table>

</div>
    </div>
  )
}

export default ListBlog