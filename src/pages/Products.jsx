import ProductCard from "./ProductCard";
import useProduct from "../hooks/useProduct";
export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProduct();
  //   const {
  //     isLoading,
  //     error,
  //     data: products,
  //   } = useQuery(["products"], getProducts, { staleTime: 1000 * 60 }); //unique key, api호출함수
  //   console.log(products);
  return (
    <>
      {isLoading && <p>..loading</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
