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
const AddProduct = () => {
  return <div className="add-product"></div>;
};

export default AddProduct;
