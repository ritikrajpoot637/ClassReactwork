import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ErrorOfBlog from './ErrorOfBlog';

const BlogComp = () => {
    const {id}=useParams()
    const [arr,setObj]=useState({});
    const[isError,setIsError]=useState(false);
    useEffect(()=>{
      let res1=async()=>{
         let res=await fetch("https://jsonplaceholder.typicode.com/todos/"+id);
             if (!res.ok) {
                setIsError(true); 
                return;
            }
         res= await res.json();
         console.log(res)
         setObj(res);
         


      }
      res1();
     
    },[id])

    if(isError)return<ErrorOfBlog/>
  return (
   <>
   <div>BlogComp</div>
   <h1>{arr.id}</h1>
   <h1>{arr.title}</h1>
   <h1>{arr.userId}</h1>
   
   </>
    


  )
}

export default BlogComp
