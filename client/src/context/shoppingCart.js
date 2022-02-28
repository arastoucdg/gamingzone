import React from "react";
import { useState } from "react";

export const ShoppingCartContext = React.createContext({});

export default function ShoppingCart({ children }) {
  const [items, setItems] = useState([]);

  const addItemToCart = (addItem) => {
    setItems({ items: [...items, addItem] });
  };
  return (
    <>
      <ShoppingCartContext.Provider value={{ items, setItems, addItemToCart }}>
        {children}
      </ShoppingCartContext.Provider>
    </>
  );
}
