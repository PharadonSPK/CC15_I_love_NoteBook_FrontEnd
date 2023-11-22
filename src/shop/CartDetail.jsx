import { useEffect, useState } from "react";
import axios from "../config/axios";
import CartItem from "../components/CartItem";
import { useProduct } from "../contexts/ProductContext";
import { useCart } from "../contexts/CartContext";

export default function CartDetail() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("cart/getcart")
      .then((res) => {
        setCart(res.data.cart);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(cart);
  // useEffect(() => {
  //   getAllProduct().then((e) => console.log("success"));
  // }, []);

  // console.log(allProduct);
  const { addToCart } = useCart();
  return cart.map((el) => (
    <CartItem
      key={el.id}
      productId={el.Products.id}
      img={el.Products.imageUrl}
      title={el.Products.name}
      prevPrice={el.Products.price}
      onClick={addToCart}
    />
  ));
}
