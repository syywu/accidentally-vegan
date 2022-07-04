import { useQuery } from "@apollo/client";
import { getBrandQuery } from "./queries/queries";

const AddProduct = () => {
  const { loading, error, data } = useQuery(getBrandQuery);
  if (loading) return <option disabled>Loading...</option>;
  if (error) return <option disabled>Error</option>;

  return (
    <form id="add-product">
      <div className="field">
        <label>Product Name:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Product Type:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Brand Name:</label>
        <select>
          <option>Brands</option>
          {data.brands.map((brand) => {
            return (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="field">
        <label>Country of Origin:</label>
        <select>
          <option>Country</option>
          {data.brands.map((brand) => {
            return (
              <option key={brand.id} value={brand.id}>
                {brand.country}
              </option>
            );
          })}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddProduct;
