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
  return (
    <form id="add-product">
      <div className="field">
        <label>product name:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>product type:</label>
        <select>
          <option>Type</option>
        </select>
      </div>

      <div className="field">
        <label>brand</label>
        <input type="text" />
      </div>
    </form>
  );
};

export default AddProduct;
