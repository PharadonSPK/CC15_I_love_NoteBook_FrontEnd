import { useCart } from "../contexts/CartContext";
import { useProduct } from "../contexts/ProductContext";
import "./Product.css";

const Products = ({ result }) => {
  const { allProduct } = useProduct();

  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Products;
