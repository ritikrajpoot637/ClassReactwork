import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ErrorOfBlog from '../BlogDynmic/ErrorOfBlog';


const ProductDetail = () => {
    const {id}=useParams()
    const [arr,setObj]=useState({});
    const[isError,setIsError]=useState(false);
    useEffect(()=>{
      let res1=async()=>{
         let res=await fetch("https://dummyjson.com/products/"+id);
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
    <div>ProductDetail</div>

    <div className="card mb-3">
  <img src={arr.images?.[0]} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{arr.title}</h5>
    <p className="card-text">{arr.description}</p>
    <p className="card-text">{arr.weight}</p>
    <p className="card-text">{arr.stock}</p>
    <p className="card-text">{arr.category}</p>
    <p className="card-text">{arr.discountPercentage}</p>
    <p className="card-text"><small className="text-body-secondary">{arr.brand}</small></p>
  </div>
</div>


    </>
  )
}

export default ProductDetail