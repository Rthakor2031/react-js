import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Dashboard = () => {
  const [data , setdata] = useState([])
  const fetchdataFromfirestore = ()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      setdata(res.data)
      console.log("Get Response Sucessfully....");
    })
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    fetchdataFromfirestore()
  },[])

  return (
   <div>
        <strong>Products</strong>
      <div style={{display:"grid" , gridTemplateColumns:"repeat(4,1fr)" , gap:"20px",marginTop:"15px"}}>
    {data.map((el)=>(
        <div key={el.id} style={{border:"1px solid gray" , boxShadow:"0px 1px 5px rgba(0,0,0.35)"}}>
            <p>{el.id}</p>
            <img src={el.image} alt={el.title}  height={200} width={200}/>
            <h5>price: {el.price}</h5>
            <b>{el.category}</b>
            <br /><br />
        </div>
      ))}
   </div>
   </div>
  )
}

export default Dashboard