import { gql, useQuery } from "@apollo/client";

const getProductQuery = gql`
  {
    products {
      name
      type
      id
    }
  }
`;

const ProductList = () => {
  const { loading, data, error } = useQuery(getProductQuery);
  if (loading) return <p>Loading..</p>;
  if (error) return <p>error</p>;
  console.log(data);

  return (
    <div className="product-list">
      <ul>
        {data.products.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
