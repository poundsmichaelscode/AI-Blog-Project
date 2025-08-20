import React from 'react'
import { assets } from '../../../assets/assets';

const CommentsTable = ({comment, fetchComments}) => {
  
  const {blog, createdAt, _id } = Comment;
  

  const BlogDate = new Date(createdAt);


    return (
        <tr className='order-y border-amber-300'>

<td className='px-6 py-4'>



<b className='font-medium text-blue-950'>Name</b> : {comment.name}
<br />
<b className='font-medium text-blue-950'>Comment</b> : {comment.content}

</td>

<td className='px-6 py-4 max-sm:hidden'>
    {BlogDate.toLocaleDateString()}
</td>

<td className='px-6 py-4'>
    <div className='inline-flex items-center gap-4'>

        {
        !comment.isApproved ? <img src ={assets.tick_icon}
         className='w-5 hover:scale-110 transition-all cursor-pointer'/> : <p className='text-xs border border-green-900 bg-emerald-700 text-emerald-500 rounded-full px-3 py-1'>Approved</p>
        }

        <img src={assets.delete_icon} alt="" className='w-5 hover:scale-110 transition-all cursor-pointers'/>
    </div>
</td>

        </tr>




  )
}

export default CommentsTable