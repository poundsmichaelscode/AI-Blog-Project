import React, { useEffect, useState } from 'react'
import { comments_data } from '../../../assets/assets';
import CommentsTable from './CommentsTable';

const Comments = () => {

  const [ comments, setComments] = useState([])

  const [filter, setFilter] = useState('Not Approved');


  const fetchComments = async ()=> {
    setComments(comments_data)
  }

useEffect(()=>{

  fetchComments()
},[])
  

  return (
    <div className='flex-1 pt-5 sm:pl-16 bg-blue-400'>
<div className='flex justify-between items-center max-w-3xl'>


<h1>Comments</h1>
<div className=' flex gap-4'>
  <button onClick={()=> setFilter ('Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Approved' ? 
  'text-emerald-400' : 'text-amber-950'}}`}>Approved</button>


  <button onClick={()=> setFilter ('Not Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Not Approved' ? 
  'text-emerald-400' : 'text-amber-950'}}`}>Not Approved</button>
</div>

</div>


<div className='relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-yellow-50 rounded-lg scrollbar-hide'>

<table className='w-full text-sm text-gray-800'>
<thead className=' text-xs text-gray-700 text-left uppercase'>

  <tr>

    <th scope='col' className='px-6 py-3 '>

Blog title and comments
    </th>

     <th scope='col' className='px-6 py-3 max-sm:hidden'>

Date
    </th>

     <th scope='col' className='px-6 py-3 '>

Action
    </th>
  </tr>
</thead>


<tbody>


{comments.filter((comment)=>{

  if(filter === "Approved")
    return comment.isApproved === true;

  return comment.isApproved === false
}).map((comment, index)=> <CommentsTable key={comment._id}
comment={comment} index = {index + 1} fetchComments = {fetchComments}/>)}



</tbody>
</table>
</div>
    </div>
  )
}

export default Comments