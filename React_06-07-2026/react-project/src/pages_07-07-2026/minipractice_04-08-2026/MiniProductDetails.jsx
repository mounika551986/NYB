import { useParams } from "react-router-dom";

function MiniProductDetails() {

  const { id } = useParams();

  const products = [
    { id: 1, name: "Laptop", price: 65000 },
    { id: 2, name: "Mobile", price: 25000 },
    { id: 3, name: "Watch", price: 5000 }
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>

      <h1>Product Details</h1>

      <h2>ID : {product.id}</h2>

      <h2>Name : {product.name}</h2>

      <h2>Price : ₹{product.price}</h2>

    </div>
  );
}

export default MiniProductDetails;