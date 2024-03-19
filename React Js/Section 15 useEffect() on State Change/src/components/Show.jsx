import React from 'react'
import { useState } from 'react';
import axios from '../utils/Axios';
import { useEffect } from 'react';

const Show = () => {
    const [ products ,setProducts] = useState([]);
  const getProdutcs = () => {
    axios
      .get("/products")
      .then((produtcs) => {
        // console.log(produtcs);
        setProducts(produtcs.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(()=>{
    getProdutcs();
  },[])
  // console.log(products)
  return (
    <>    
    <button
    onClick={getProdutcs}
    className="bg-red-400 mt-4 rounded text-white px-5 py-2"
  >
    Get Api Products
  </button>
  <br /> <br />
  <hr className="my-10" />
  <div>  <ul className="">
       
       {products.length>0 ? (
        products.map((p)=>(
          <li key={p.id} className="bg-red-200 mb-4 rounded  p-5">
            {p.title}
          </li>
   
        ))
       ):(
        <h1>Loading....</h1>
       ) 
      }
                
      </ul></div>
  
  
  </>
    

  )
}

export default Show