import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../../assets/assets'
import BlogTableitems from './Blogtableitems'

const Dashboard = () => {


  const [DashboardData , setDashboardData] =useState({
    blogs:0,
    comments:0,
    drafts:0,
    recentBlogs:[]


  })


  const fetchDashboard = async () =>{

    setDashboardData (dashboard_data)
  }


  useEffect(()=> {

fetchDashboard()
  },[])



  return (
    
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>

<div className='flex  flex-wrap gap-4'>


<div className='flex items-center gap-4 bg-white  p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 trasition-all'>



  <img src={assets.dashboardicon} alt="" />



  <div>

    <p className='text-xl font-semivold text-gray-600'>
      {DashboardData.blogs}</p>
    <p className='text-gray-400 font-light'>Blogs</p>


  </div>
</div>





<div className='flex items-center gap-4 bg-white  p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 trasition-all'>



  <img src={assets.drafticons} alt="" />



  <div>

    <p className='text-xl font-semivold text-gray-600'>
      {DashboardData.drafts}</p>
    <p className='text-gray-400 font-light'>Drafts</p>


  </div>
</div>



<div className='flex items-center gap-4 bg-white  p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 trasition-all'>



  <img src={assets.commetsicon} alt="" />



  <div>

    <p className='text-xl font-semivold text-gray-600'>
      {DashboardData.comments}</p>
    <p className='text-gray-400 font-light'>Comments</p>


  </div>
</div>
</div>


<div>

<div   className='flex items-center gap-3 m-4 text-gray-600'>

  <img src={assets.dashboardicon} alt="" />

  <p>Latest Post</p>


</div>


<div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>

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

{DashboardData.recentBlogs.map((blog, index )=>{

return <BlogTableitems key= {blog._id} blog ={blog}
fetchBlogs = {fetchDashboard}  index = {index + 1}/>
})}

  </tbody>
</table>

</div>


</div>
</div>
    
  )
}

export default Dashboard