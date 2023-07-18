import { createContext, useContext } from "react";
import { useState } from "react";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCarts] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCarts }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
