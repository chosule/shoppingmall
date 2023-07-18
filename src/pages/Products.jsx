import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/firebase"
import ProductCard from "./ProductCard"

export default function Products() {
    const {
        isLoading,
        error,
        data: products
    } = useQuery(['products'] , getProducts) //unique key, api호출함수
    // console.log(products)
    return(
        <>
            {isLoading && <p>..loading</p>}
            {error && <p>{error}</p>}
            <ul className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-4 gap-4 ">
                {products && 
                    products.map((product) => 
                        <ProductCard key={product.id} 
                        product={product} />)
                }
            </ul>
        </>
    ) 
}