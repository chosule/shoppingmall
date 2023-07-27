import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "../components/ui/Button";
import { useAuthContext } from "../context/AuthContext";
import { addOrUpdateToCart } from "../api/firebase";

export default function ProductDetail() {
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);

  const { uid } = useAuthContext();

  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateToCart(uid, product);
  };
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <section className="flex w-full gap-5 items-start justify-center py-28">
      <div className="flex justify-end">
        <img className="w-600" src={image} alt={title} />
      </div>
      <div>
        <p className="text-3xl font-bold">{title}</p>
        <p className="text-2xl font-bold py-4">₩ {price}</p>
        <div>
          <p>{description}</p>
        </div>
        <div className="flex py-4">
          <label htmlFor="select">옵션:</label>
          <select
            id="select"
            className="w-20"
            onChange={handleSelect}
            value={selected}
          >
            {options &&
              options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
          </select>
        </div>
        <div>
          <Button text="장바구니" onClick={handleClick} />
        </div>
      </div>
    </section>
  );
}
