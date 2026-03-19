import React, { use, useState } from 'react'
import { Link } from 'react-router-dom';
const fetched=fetch("https://dummyjson.com/products").then(res=>res.json());

const Home2 = () => {
  const data=use(fetched);
 
  const[curpage,setPage]=useState(1);
  const perpageItem=8;
  
  const {products}=data;
  const  rproducts=[...products].reverse();
const Totalpage=Math.ceil(rproducts.length/perpageItem);
console.log(`allProduct:${rproducts.length}`);
 const lastIndex=curpage*perpageItem;
 const firstIndex=lastIndex-perpageItem;
 const res=rproducts.slice(firstIndex,lastIndex);

  return (
    <>
    <div className='text-center'>Product with only useState</div>
    <div className="d-flex flex-wrap gap-4 align-conternt-center justify-content-center "> 
    {res.map((val)=>{
      return(
        <div className="card" style={{width:"18rem"}}>
  <img className="card-img-top" src={val.thumbnail} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{val.title}</h5>
    <p className="card-text">{val.description}</p>
    <Link to="#" className="btn btn-primary">More Detail</Link>
  </div>
</div>

      );
    })}
    </div>
    <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className={`page-item ${curpage==1?"disabled":''}`}>
      <button className="page-link" onClick={()=>{setPage(c=>c-1) ;window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Prev</button>
    </li>

   { [...Array(Totalpage)].map((_,i)=>{
       const curp=i+1;
      return ( <li className={`page-item ${curpage==curp?"active":''}`}><button className="page-link" onClick={()=>{setPage(curp); window.scrollTo({ top: 0, behavior: 'smooth' });}}>{i+1}</button></li>)  
    })}
    
    <li className={`page-item ${curpage==Totalpage?"disabled":''}`}>
     <button className="page-link" onClick={()=>{setPage(c=>c+1) ;window.scrollTo({ top: 0, behavior: 'smooth' })}}>Next</button>
    </li>
  </ul>
</nav>



    </>
  )
}

export default Home2
