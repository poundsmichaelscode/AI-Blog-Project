import React from 'react'
import { assets } from '../../../assets/assets'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../admin/Sidebar'

const Layout = () => {


const navigate = useNavigate()

const logout = ()=>{

  navigate('/')
}

  return (
    <>
    <div className='flex iems-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-100'>
<img src={assets.logo} alt = " " className ='w-32 sm:w-40 cursor-pointer '
onClick ={() => navigate('/')}/>

<button onClick={logout}  className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor'>Logout</button>

    </div>
    <div className ='flex h-[calc (100vh-70px)'> 

      <Sidebar/>
    <Outlet/>
    </div>

    
    
    </>
  )
}

export default Layout