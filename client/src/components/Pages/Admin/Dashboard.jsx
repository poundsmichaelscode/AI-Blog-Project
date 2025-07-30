import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../../assets/assets'

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
</div>
    
  )
}

export default Dashboard