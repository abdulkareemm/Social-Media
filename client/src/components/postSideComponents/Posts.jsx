import React from 'react'
import {PostsData} from "../../data/PostsData"
import Post from './Post'

const Posts = () => {
  return (
    <div className='flex flex-col gap-[1rem]'>
    {PostsData.map(post=>(

        <Post key={post.id} data={post} />
    ))}
    </div>
  )
}

export default Posts