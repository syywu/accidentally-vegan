import { useQuery } from "@apollo/client";
import { getProductQuery } from "./queries/queries";
import ProductDetail from "./ProductDetails";

const ProductList = () => {
  const { loading, data, error } = useQuery(getProductQuery);
  if (loading) return <p>Loading..</p>;
  if (error) return <p>error</p>;
  console.log(data);

  return (
    <div className="product-list">
      {data.products.map((product) => {
        return (
          <div>
            <img
              className="product-img"
              src={product.image}
              alt={product.name}
              width="200"
              height="200"
            />
            <p key={product.id}>{product.name}</p>
            <p>{product.type}</p>
          </div>
        );
      })}
      <ProductDetail />
    </div>
  );
};

export default ProductList;
