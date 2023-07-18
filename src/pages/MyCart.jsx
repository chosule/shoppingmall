import React, { useEffect, useState } from "react";
import { getCart } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { useCartContext } from "../context/CartContext";

export default function MyCart() {
  //   const { cart, setCarts } = useCartContext();
  const { uid } = useAuthContext();

  const { data: products } = useQuery(["carts"], () => getCart(uid));
  console.log("제품데이터", products);
  const [total, setTotal] = useState(0);

  const handleIncrease = () => {
    setTotal((num) => num + 1);
  };

  const handleDecrease = () => {
    setTotal((num) => num - 1);
  };
  return (
    <section className="w-full">
      <h2 className="text-3xl py-7 italic underline text-center font-bold">
        My Cart
      </h2>
      <ul className="w-full flex gap-10 flex-wrap">
        {products.map((product) => (
          <li key={product.id} className="flex flex-col justify-evenly">
            <div className="">
              <img
                className="w-80 rounded"
                src={product.image}
                alt={product.id}
              />
              <div>
                <h4>{product.title}</h4>
                <h4>{product.option}</h4>
                <h4>{product.price}</h4>
              </div>
            </div>
            <div>
              <button onClick={handleDecrease}>-</button>
              <div>{total}</div>
              <button onClick={handleIncrease}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
