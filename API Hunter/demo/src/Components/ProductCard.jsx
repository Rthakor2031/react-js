import { Link } from "react-router-dom";

export default function ProductCard({ brand, category, price, id }) {
  return (
    <tr data-testid="item">
      <td>{id}</td>
      <td>
        <Link to={`/products/${id}`} data-testid="brand">
          {brand}
        </Link>
      </td>
      <td data-testid="category">{category}</td>
      <td data-testid="price">{price}</td>
    </tr>
  );
}
