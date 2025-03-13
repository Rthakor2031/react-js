import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Project = () => {
  let [data, setData] = useState([]);
  const { id } = useParams(); 

//*********/ item get with id *******//

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data); 
      })
      .catch((err) => alert("Error Found", err));
  }, [id]);

  //***********delete part*************//

  let displaynone = ()=>{
    axios.delete(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      console.log(response.data);
      setData({}); 
      alert("Item Delete Sucessfully.....")
    })
    .catch((err) => alert(`Error deleting product: ${err.message}`));
  }

  return (
    <div style={{ border: "2px solid #ccc", borderRadius: "5px", padding: "20px", margin: "30px 0", maxWidth:"400px",minHeight:"300px" , textAlign:"center",margin:"15% auto" }}>
      <h1>{data.title}</h1>
      <img src={data.image} alt={data.title} height={150} width={150} />
      <p>{data.description}</p>
      <h4>Price: ${data.price}</h4>
      <b>Category: {data.category}</b><br /><br />

      <button style={{backgroundColor:"red",padding:"8px 25px" ,fontWeight:"bolder",color:"white"}} onClick={displaynone}>Cancle Order</button>
    </div>
  );
};

export default Project;
