import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ProductList = () => {
  const [products, setProducts] = useState([]); //product set in state.
  const [page, setpage] = useState(1); // for use pagination.
  const [filter, setfilter] = useState(null); //filtring products.
  const [sort, setsort] = useState(""); //Sorting product.
  const [search, setsearch] = useState(""); //Search products.

  //************Item Get part using Axios.get method**********************/

  useEffect(() => {
    axios.get("http://localhost:8000/Product/", {
        params: {
          category: filter,
          _page: page,
          _limit: "10",
          _sort: "price",
          _order: sort,
          q: search,
        },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [products,filter, sort, page, search]);

  // *******************searchFunctionality*******************/

  let searchOperation = (e) => {
    setTimeout(() => {
      setsearch(e.target.value);
    }, 2000);
  };

  // *************************for reset all functionality********************/
  const resetAll = () => {
    setpage(1);
    setsort('');
    setfilter(null);
    setsearch('');
    alert('All filters, sort, and search reset');
  };
  return (
    <div>
      <h2 style={{ backgroundColor: "teal" }}>Product List</h2>
      <div className="Container">
        <div> {/*******************sort button belowside****************************/}
          <button onClick={() => setsort("asc")}>Low To High Price</button>
          <button onClick={() => setsort("desc")}>High To Low Price</button>
        </div>

        {/***********************************Search Option*******************************/}
        <input  
          type="text"
          placeholder="Search Goods.."
          onChange={(e) => searchOperation(e)}
        />

        {/* ****************filter part********************************************** */}
        <select onChange={(e) => setfilter(e.target.value)}>
          <option value="">Select Your choice.</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
        </select>

        {/*******************************************Reset Button**********************************************/}
        <button onClick={resetAll}>Reset</button>

      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "15px",
          border: "1px solid red",
          padding: "20px",
        }}
      >
        {products.map((el) => (
          <div key={el.id} style={{border:"1px solid black",boxShadow:"0px 6px 6px rgba(0,0,0,0.25)", height:"600px",padding:"10px"}}>
            <p>{el.id}</p>
            <img src={el.image} alt={el.title} height={200} width={200} />
            <p>{el.category}</p>
            <h3>{el.price}</h3>
            <i>{el.description}</i><br /><br />
            <Link to={`/ProductDetails/${el.id}`} style={{backgroundColor:"teal",color:"black",textDecoration:"none",padding:"5px 30px",border:"1px solid black"}}>Buy Item</Link><br /><br />
          </div>
        ))}
      </div>
      <br />
      <button onClick={() => setpage(page - 1)} disabled={page == 1}>
        👈Previous
      </button>
      <b>{page}</b>
      <button onClick={() => setpage(page + 1)} disabled={page == products.length + 1}>
        Next👉
      </button>
      <br />
      <br />
    </div>
  );
};

export default ProductList;
