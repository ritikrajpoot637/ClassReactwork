import React, { use, useState } from 'react'
import { Link, useSearchParams ,useParams} from 'react-router-dom';
const fetched=fetch("https://dummyjson.com/products").then(res=>res.json());

const Home = () => {
  const data=use(fetched);
 
 const [c1]=useSearchParams();
 const curpage=Number(c1.get(''))||1
 
 

  const perpageItem=8;
  
  const {products}=data;
  const  rproducts=[...products].reverse();
const Totalpage=Math.ceil(rproducts.length/perpageItem);
console.log(`allProduct:${rproducts.length}`);
 const lastIndex=curpage*perpageItem;
 const firstIndex=lastIndex-perpageItem;
 const res=rproducts.slice(firstIndex,lastIndex);
useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }, [curpage]);
  return (
    <>
    <div className='text-center'>Product with only UseSerachParms</div>
    <div className="d-flex flex-wrap gap-4 align-conternt-center justify-content-center "> 
    {res.map((val)=>{
      return(
        <div className="card" style={{width:"18rem"}}>
  <img className="card-img-top" src={val.thumbnail} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{val.title}</h5>
    <p className="card-text">{val.description}</p>
    <Link to={`/product/${val.id}`} className="btn btn-primary">More Detail</Link>
  </div>
</div>

      );
    })}
    </div>
    <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className={`page-item ${curpage==1?"disabled":''}`}>
      <Link className="page-link" to={`?=${curpage-1}`}>Prev</Link>
    </li>

   { [...Array(Totalpage)].map((_,i)=>{
       const curp=i+1;
      return ( <li className={`page-item ${curpage==curp?"active":''}`}><Link className="page-link" to={`?=${i+1}`}>{i+1}</Link></li>)  
    })}
    
    <li className={`page-item ${curpage==Totalpage?"disabled":''}`}>
     <Link className="page-link" to={`?=${curpage+1}`}>Next</Link>
    </li>
  </ul>
</nav>
 


    </>
  )
}

export default Home
