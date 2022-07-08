import { useQuery } from "@apollo/client";
import { getBrandQuery, addProductMutation } from "./queries/queries";
import { useState } from "react";
import { flowRight as compose } from "lodash";

const AddProduct = () => {
  const { loading, error, data } = useQuery(getBrandQuery);
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [brandId, setBrandId] = useState();
  const [country, setCountry] = useState();
  if (loading) return <option disabled>Loading...</option>;
  if (error) return <option disabled>Error</option>;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
  }

  return (
    <form id="add-product" onSubmit={handleSubmit}>
      <div className="field">
        <label>Product Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Product Type:</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Brand Name:</label>
        <select value={brandId} onChange={(e) => setBrandId(e.target.value)}>
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
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
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
