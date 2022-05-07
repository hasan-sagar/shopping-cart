import React from "react";
import { CartState } from "../context/Context";
import SingleProductPage from "./SingleProductPage";

function Home() {
  const {
    state: { products },
  } = CartState();

  return (
    <>
      {products.map((product) => {
        return <SingleProductPage product={product} key={product.id} />;
      })}
    </>
  );
}

export default Home;
