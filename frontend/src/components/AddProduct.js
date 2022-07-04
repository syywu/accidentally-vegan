import { gql, useQuery } from "@apollo/client";

const getBrandQuery = gql`
  {
    brands {
      name
      country
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

      <div className="field">
        <label>Country of Origin:</label>
        <select>
          <option>Country</option>
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddProduct;
