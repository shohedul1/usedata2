import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postSlice';



function PostsView() {
    const {isLoading,posts,error} = useSelector((state)=> state.posts);
    
    const dispatch =  useDispatch()

    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
    return (
    <div>
        {isLoading && <h3> Loading...</h3> }
        {error && <h3>{error}</h3>}
       <section className='row text-center m-5 '>
       {posts && posts.map((post)=>{
             return <article className=' col-6 '>
               <div className='bg-dark border border-danger m-1 p-2 '>
               <h5 className='text-info m-2'>{post.title}</h5>
                <h5 className='text-white'>{post.body}</h5>
               </div>
            </article>
             })}
       </section>
          
       
    </div>
  )
}

export default PostsView;
