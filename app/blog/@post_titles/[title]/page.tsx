import React from 'react'
import { Posts } from '../page'

type Params = {
    params:{
        title:string
    }
}

export default async function All_Posts({params}:Params) {
    const title = decodeURIComponent(params.title)
    const posts = await Posts()
    const post = posts.posts.find((post:any)=>post.title===title)

   
  return (
    <div>
      <ul className='text-gray-300 '>
       
            <li key={post.id}>
                <h1 className='font-semibold'>Post Title: {post.title}</h1>
                <p>{post.body}</p>
            </li>

      </ul>
    </div>
  )
}
