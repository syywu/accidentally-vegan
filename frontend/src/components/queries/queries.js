import { gql } from "@apollo/client";

export const getProductQuery = gql`
  query GetProduct {
    products {
      name
      type
      image
      id
    }
  }
`;

export const getBrandQuery = gql`
  query GetBrand {
    brands {
      name
      country
      id
    }
  }
`;

export const addProductMutation = gql`
  mutation {
    addProduct(name: "", type: "", image: "", brandId: "") {
      name
      type
      image
      id
    }
  }
`;
