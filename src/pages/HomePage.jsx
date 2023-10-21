// import LoginForm from "../features/auth/LoginForm";

import { useEffect, useState } from "react";
import Products from "../Products/Products";
import Recommended from "../Recommended/Recommended";
import Sidebar from "../Sidebar/Sidebar";
import { useProduct } from "../contexts/ProductContext";
import Card from "../components/Card";
import Nav from "../Navigation/Nav";
import { useCart } from "../contexts/CartContext";
import axios from "../config/axios";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { cart, setCart } = useCart();

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");
  const { allProduct, setAllProduct } = useProduct();

  useEffect(() => {
    // setAllProduct();
    // allProduct();
    //console.log("eiei");
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = allProduct.filter(
    (product) =>
      product.description.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }
    const addToCart = (productId) => {
      axios
        .post("/cart", { productId: productId, quantity: 1 })
        .then((res) => {
          console.log(res.data.cart);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ brand, name, price, description }) =>
          brand === selected ||
          name === selected ||
          price === selected ||
          description === selected
      );
    }

    return filteredProducts.map(({ id, imageUrl, description, price }) => (
      <Card
        key={id}
        productId={id}
        img={imageUrl}
        title={description}
        prevPrice={price}
        onClick={addToCart}
      />
    ));
  }

  const result = filteredData(allProduct, selectedCategory, query);

  return (
    // <h1>Hello World!</h1>

    <div>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
}
