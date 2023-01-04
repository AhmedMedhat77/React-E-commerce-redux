import React from "react";
import { useDispatch, useSelector } from "react-redux";

import productsApi from "../api/dummyData/trendingProducts";
import { mergeOldState } from "../helpers/merge";
import { productAction } from "../redux/Slice/productSlice";

export const Products = Object.freeze({
  Products: Symbol("products"),
  Cart: Symbol("cart"),
});

const useProducts = (...productApi) => {
  const product = useSelector((s) => s.product);
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState({
    is_products_loading: false,
    is_cart_loading: false,
  });

  React.useEffect(() => {
    console.log("effect");

    productApi.forEach((v) => {
      switch (v) {
        case Products.Products: {
          console.log("get Product");
          setLoading(mergeOldState({ is_products_loading: true }));
          dispatch(productAction.set({ is_products_loading: true }));
          productsApi()
            .get_products()
            .then((r) => {
              dispatch(productAction.set({ data: r, filter: r }));
            })
            .finally(() => {
              dispatch(productAction.set({ is_products_loading: false }));
              setLoading(mergeOldState({ is_products_loading: false }));
            });
          break;
        }
        case Products.Cart: {
          console.log("get Cart");
          dispatch(productAction.set({ is_cart_loading: true }));
          setLoading(mergeOldState({ is_cart_loading: true }));
          productsApi()
            .get_products()
            .then((r) => {
              dispatch(productAction.set({ data: r }));
            })
            .finally(() => {
              dispatch(productAction.set({ is_cart_loading: false }));
              setLoading(mergeOldState({ is_cart_loading: false }));
            });
          break;
        }
        default: {
          break;
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const addToCart = React.useCallback(
    (item) => {
      dispatch(productAction.addToCart(item));
    },
    [dispatch]
  );
  const removeFromCart = React.useCallback(
    (item) => {
      dispatch(productAction.removeFromCart(item));
    },
    [dispatch]
  );
  const deleteFromCart = React.useCallback(
    (item) => {
      dispatch(productAction.deleteFromCart(item));
    },
    [dispatch]
  );

  return { product, loading, addToCart, removeFromCart, deleteFromCart };
};

export default useProducts;
