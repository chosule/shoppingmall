import { addOrUpdateToCart, removeFromCart } from "../api/firebase";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import useCart from "../hooks/useCart";

export default function CartItem({
  uid,
  product,
  product: { id, title, quantity, image, price, option },
}) {
  //   console.log("product", product);

<<<<<<< HEAD
  const { cartsAddOrUpdate, removeItem } = useCart();
  // const cartQuery = useMutation(
  //   ({ uid, product }) => addOrUpdateToCart(uid, product),
  //   {
  //     onSuccess: () => client.invalidateQueries(["carts"]),
  //   }
  // );

  const handleClickMinus = () => {
    if (quantity < 2) return;
    cartsAddOrUpdate.mutate({ ...product, quantity: quantity - 1 });
=======
  const client = useQueryClient();
  const cartQuery = useMutation(
    ({ uid, product }) => addOrUpdateToCart(uid, product),
    {
      onSuccess: () => {
        // console.log("test");
        client.invalidateQueries(["carts"]);
      },
    }
  );
  const handleClickMinus = () => {
    // if (quantity < 2) return;
    // addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
    cartQuery.mutate(
      { uid, product },
      {
        onSuccess: () => {
          console.log("test");
          console.log("수량", product);
          if (quantity < 2) return;
          addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
        },
      }
    );
>>>>>>> 6ddc310d9dace69521bf56ca945c0f6fc4d4e346
  };

  const handleClickAdd = () => {
    cartsAddOrUpdate.mutate({ ...product, quantity: quantity + 1 });
  };

  const handleClickDelete = () => {
    removeItem.mutate(id);
  };

  return (
    <li>
      <img className="w-350" src={image} alt={id} />
      <h1>{title}</h1>
      <div className="flex justify-between">
        <h3>{price}</h3>
        <h3>{option}</h3>
      </div>
      <div className="flex gap-3">
        <button onClick={handleClickAdd}>+</button>
        <span>{quantity}</span>
        <button onClick={handleClickMinus}>-</button>
        <RiDeleteBin5Fill onClick={handleClickDelete} />
        {/* <button onClick={() => client.invalidateQueries(["carts"])}>
          무효화버튼test
        </button> */}
      </div>
    </li>
  );
}
