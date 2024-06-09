import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/Product/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  //*****************************for delete item************************************/
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/Product/${id}`)
      .then(() => {
        alert("Product deleted successfully!");
        console.log(product);
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: "center"}}>
        <h2>ProductDetails</h2>
        <br /><br />
        <div style={{border:"1px solid gray",width:"60%",height:"auto",margin:"auto",padding:"10px",borderRadius:"15px"}}>
        <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} height={300} width={300}/>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.description}</p><br />
      <Link to={`/Editproduct/${product.id}`} style={{ marginRight: "10px",backgroundColor:"teal",padding:"7px 27px",borderRadius:"5px",color:"white" ,textDecoration:"none"}}>
        Edit
      </Link>

      <Link onClick={handleDelete} to={`/Deleteproduct/${product.id}`} style={{ marginRight: "10px",backgroundColor:"teal",padding:"7px 27px",borderRadius:"5px",color:"white" ,textDecoration:"none"}}>
        Delete
      </Link>
      <br /><br />

      {/* <button onClick={handleDelete}>Delete</button> */}
        </div>
    </div>
  );
};

export default ProductDetails;
