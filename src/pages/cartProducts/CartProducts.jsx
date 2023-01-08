import React from "react";
import SingleCard from "../../components/singleCard/SingleCard";
import useProducts from "../../hook/useProducts";
import Titile from "../../layouts/title/Titile";

const CartProducts = () => {
  const { product, addToCart, removeFromCart, deleteFromCart } = useProducts();
  console.log(product);

  return (
    <section>
      <Titile title="myCart" />
      <div className="container" style={{ color: "white" }}>
        <div style={{ width: "100%" }}>
          {!product.cart.product || product.cart.product.length === 0 ? (
            <div>no items in cart </div>
          ) : (
            product?.cart.product.map((v) => {
              return (
                <SingleCard
                  item={v}
                  key={v.id}
                  title={v.name}
                  description={v.author}
                  onIncrement={addToCart}
                  onDecrement={removeFromCart}
                  onDelete={deleteFromCart}
                  total={v.count * v.price}
                />
              );
            })
          )}
        </div>
        <div>
          {/* total price */}
          {!product.cart.product || product.cart.product.length === 0 ? (
            <>
              <div>items:0</div>
              <div>$0</div>
            </>
          ) : (
            "$" +
            product.cart?.product
              .map((e) => {
                return e.count * e.price;
              })
              .reduce((p, c) => p + c, 0)
          )}
        </div>
      </div>
    </section>
  );
};

export default CartProducts;
