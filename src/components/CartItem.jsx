import React from "react";
import "./CartItem.css";

const CartItem = ({ productId, img, title, prevPrice, onClick }) => {
  return (
    <>
      {/* <h5>{img}</h5> */}
      <div className="cartItem">
        <img src={img} />
        <div className="description">
          <p>
            <b>{title}</b>
          </p>
          <p> {prevPrice}</p>
          <div className="Price">
            {/* <button onClick={() => removeFromCart(id)}> - </button>
            <input
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)}> + </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
