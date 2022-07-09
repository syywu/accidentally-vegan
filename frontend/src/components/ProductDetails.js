import { useQuery } from "@apollo/client";
import { getProductQuery } from "./queries/queries";

const ProductDetail = () => {
  const { loading, data, error } = useQuery(getProductQuery);
  if (loading) return <p>Loading..</p>;
  if (error) return <p>error</p>;
  console.log(data);

  return (
    <div className="product-details">
      <p>Prodcut Details</p>
    </div>
  );
};

export default ProductDetail;
