import { useQuery } from "@apollo/client";
import { getProductQuery } from "./queries/queries";

const ProductDetails = ({ productId }) => {
  const { loading, data } = useQuery(getProductQuery, {
    variables: { id: productId },
  });
  if (loading) return <p>Loading..</p>;
  return (
    <div className="details">
      <h2>{data.product.name}</h2>
      <p>{data.product.type}</p>
      <p>{data.product.brand.name}</p>
      <p>{data.product.brand.country}</p>
      <h3>Other products by this brand</h3>
      <ul className="other-products">
        {data.product.brand.products.map((item) => {
          return (
            <>
              <p key={item.id}>{item.name}</p>
              <img src={item.image} alt={item.name} width="75" height="75" />
            </>
          );
        })}
      </ul>
    </div>
  );
};

//   return <div className="product-details">{display}</div>;

export default ProductDetails;
