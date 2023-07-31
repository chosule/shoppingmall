import React, { useEffect, useState } from "react";
import { getCart } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import { FaEquals } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../components/ui/Button";
import { useMutation } from "react-query";
import useCart from "../hooks/useCart";
const SHIPPING = 3000;

export default function MyCart() {
  //   const { cart, setCarts } = useCartContext();
  const { uid } = useAuthContext();

  const {
    queryCarts: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  return (
    <section>
      {!hasProducts && <p>장바구니에 담긴 상품이 없습니다.</p>}
      {hasProducts && (
        <>
          <h1 className="text-3xl font-bold text-center py-5 italic">
            My Cart
          </h1>
          <ul className="flex gap-10 flex-wrap my-10">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
        </>
      )}
      <div className="border flex items-center gap-6 p-3 my-10 justify-end">
        <PriceCard text="상품 총액" price={totalPrice} />
        <AiOutlinePlus />
        <PriceCard text="배송액" price={SHIPPING} />
        <FaEquals />
        {/* <PriceCard text="총가격" price={totalPrice + SHIPPING} /> */}
        <Button text="주문하기" />
      </div>
    </section>
  );
}
