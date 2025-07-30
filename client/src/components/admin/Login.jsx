import React, { useState } from 'react'

const Login = () => {
  

const [email, setEmail] = useState('')

const [password, setPassword] = useState('')

const handelSubmit = async (e) => {
e.preventDefault()
}



return(

    <div className ='flex items-center justify-center h-screen'>

<div className='w-full max-w-sm p-8 max-md:m-6 border border-primary/100 shadow-xl shadow-primary/15 rounded-lg'>

< div className ='flex flex-col items-center justify-center'>

<div className='w-full py-6 text-center'> 

  <h1 className='text-3xl font-bold'>Admin <span className='font-italic text-primary'>Login</span></h1>

  <p className='font-light'>Enter password to Access the Admin panel </p>
</div>

<form onSubmi={handelSubmit} className='mt-6-w-full sm:max-w-md text-gray-600'>
<div className='flex flex-col'>
<label>Email</label>

<input onChange={ e=> setEmail(e.target.value)} value={email} 
type="email" required placeholder='enter your Amin Email'
className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>

<label>Password</label>

<input 
onChange={ e=> setPassword(e.target.value)} value={password} 
type="password" required placeholder='enter your Amin password'
className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>

</div>

<button type = "submit" className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bgg-primary/90 transitionn-all'> Login</button>
</form>

</div>

</div>

  </div>
  )
}

export default Login