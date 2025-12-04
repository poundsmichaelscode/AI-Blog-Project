import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Blog from './components/Pages/Blog'
import Dashboard from './components/Pages/Admin/Dashboard'
import Layout from './components/Pages/Admin/Layout'
import AddBlog from './components/Pages/Admin/AddBlog'
import ListBlog from './components/Pages/Admin/ListBlog'
import Comments from './components/Pages/Admin/Comments'
import Login from './components/admin/Login'
// import AddBlog from './components/Pages/Admin/AddBlog'



const App = () => {
  return (
    <div>
<Routes>
  
  < Route path='/' element={<Home/>}/>
  < Route path='/blog/:id' element={<Blog/>}/>

 < Route path ='/admin' element = { true ? <Layout/> : <Login/>} >

 < Route index element = {<Dashboard/>} /> 

<Route path='addblog' element ={<AddBlog/>}/>

<Route path='listBlog' element ={<ListBlog/>}/>
<Route path='comments' element ={<Comments/>}/>

 </Route> 

</Routes>

    </div>
  )
}

export default App