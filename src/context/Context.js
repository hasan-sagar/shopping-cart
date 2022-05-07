import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";
import product from "../productData";

const Cart = createContext();

const Context = ({ children }) => {
  const products = product.map((p) => ({
    id: p.id,
    name: p.title,
    price: p.price,
    image: p.image,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
