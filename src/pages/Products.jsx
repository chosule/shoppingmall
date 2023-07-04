import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/firebase"
import ProductCard from "./ProductCard"

export default function Products() {
    const {
        isLoading,
        error,
        data: products
    } = useQuery(['products'] , getProducts) //unique key, api호출함수
    return(
        <>
            {isLoading && <p>..loading</p>}
            {error && <p>{error}</p>}
            <ul>
                {products && products.map((product) => 
                    <ProductCard key={product.id} 
                    product={product} />)
                }
            </ul>
        </>
    ) 
}