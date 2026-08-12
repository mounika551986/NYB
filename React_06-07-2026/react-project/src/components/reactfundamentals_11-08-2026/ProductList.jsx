import Product from "./Product";

function ProductList({ products }) {
  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
