import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Project from "./Project"; // Make sure to import the Project component

const Product = () => {
  const [data, setData] = useState([]);

  //*********************items get part***************************/
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => setData(response.data))
      .catch((err) => alert("Error Found"));
  }, []);

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "15px", marginTop: "8%", }}>
        {data.map((el) => (
          <div key={el.id} style={{ border: "2px solid gray", textAlign: "center", width: "350px", height:"fit-content"}}>
            <p>{el.id}</p>
            <img src={el.image} alt={el.title} height={150} width={150} />
            <p>{el.title}</p>
            <h5>{el.price}</h5>
            <h5>{el.description}</h5>
            <p>{el.category}</p><br /><br />
            <Link to={`/Project/${el.id}`}  style={{border:"1px solid black",textDecoration:"none",backgroundColor:"green",color:"white",padding:"6px 50px"}}>ADD-Item</Link><br /><br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
