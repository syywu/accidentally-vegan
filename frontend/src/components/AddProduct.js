import { gql, useQuery } from "@apollo/client";

const getBrandQuery = gql`
  {
    brands {
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
        <label>Product Name:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Product Type:</label>
        <select>
          <option>Type</option>
        </select>
      </div>

      <div className="field">
        <label>Brand Name:</label>
        <input type="text" />
      </div>

      <button>+</button>
    </form>
  );
};

export default AddProduct;
