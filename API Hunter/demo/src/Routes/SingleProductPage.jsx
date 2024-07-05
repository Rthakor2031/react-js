import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProductPage() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`
      )
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(data);
  const { brand, category, details, img, price } = data;

  return (
    <div id="products-container" data-testid="products-container">
      <div>
        <h3 id="product-brand" data-testid="product-brand">
          {brand}
        </h3>
      </div>
      <div>
        <img
          src={img}
          id="product-image"
          data-testid="product-image"
          alt={brand}
        />
      </div>
      <div id="product-category" data-testid="product-category">
        {category}
      </div>
      <div id="product-details" data-testid="product-details">
        {details}
      </div>
      <div id="product-price" data-testid="product-price">
        ${price}
      </div>
    </div>
  );
}

export default SingleProductPage;
