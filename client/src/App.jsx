import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Blog from './components/Pages/Blog'
const App = () => {
  return (
    <div>
<Routes>
  
  < Route path='/' element={<Home/>}/>
  < Route path='/blog' element={<Blog/>}/>
    {/* < Route path='/admin' element={<Admin/>}/> */}

</Routes>

    </div>
  )
}

export default App