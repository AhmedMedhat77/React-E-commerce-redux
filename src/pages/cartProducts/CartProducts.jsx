import React from "react";
import useProducts from "../../hook/useProducts";

const CartProducts = () => {
  const { product, addToCart, removeFromCart } = useProducts();
  return (
    <div style={{ color: "white" }}>
      count : {product.cart.count}
      Products
      <ul>
        {product.cart.product.map((v) => {
          return (
            <li style={{ color: "white" }} key={v.id}>
              {v.name} {v.count}
              <button onClick={() => addToCart(v)}> + </button>
              <button onClick={() => removeFromCart(v)}> - </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartProducts;
