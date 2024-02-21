import axios from "axios";
import React, { createContext } from "react";
import { useContext } from "react";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const ProductContext = ({ children }) => {
  let API_PRODUCT = "http://localhost:3000/data";

  async function addProduct(newProduct) {
    await axios.post(API_PRODUCT, newProduct);
  }

  let values = {
    addProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
