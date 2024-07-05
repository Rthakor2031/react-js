import ProductCard from "./ProductCard";

function ProductsTable({ data }) {
  return (
    <table border="1px">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            brand={item.brand}
            category={item.category}
            price={item.price}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ProductsTable;
