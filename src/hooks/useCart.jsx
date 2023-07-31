import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { getCart, addOrUpdateToCart, removeFromCart } from "../api/firebase";
export function useCart() {
  const { uid } = useAuthContext();

  const queryClient = useQueryClient();

  const queryCarts = useQuery(["carts", uid || ""], () => getCart(uid), {
    enabled: !!uid, //uid가 존재하는 경우에만 사용할수 있도록 설정
  });

  // console.log(queryCarts);
  const cartsAddOrUpdate = useMutation(
    (product) => addOrUpdateToCart(uid, product),
    {
      onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
    }
  );

  const removeItem = useMutation((id) => removeFromCart(uid, id), {
    onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
  });

  return { queryCarts, cartsAddOrUpdate, removeItem };
}

export default useCart;
