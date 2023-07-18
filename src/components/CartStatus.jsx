import { useQuery } from "@tanstack/react-query"
import { getCart } from "../api/firebase"
import {AiOutlineShoppingCart } from "react-icons/ai";
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
    const { uid } = useAuthContext();
    const {
        data: products
    } = useQuery(['carts'],() => getCart(uid));
    // console.log('carts',products)
    return(
        <div className="relative">
            <AiOutlineShoppingCart className="text-2xl"/>
            {products && <p className="w-5 h-5 text-white text-center font-bold absolute rounded-full -top-3 -right-2 bg-brand">{products.length}</p>}
        </div>
    )
}