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
  mutation ($name: String!, $type: String!, $image: String!, $brandId: ID!) {
    addProduct(name: $name, type: $type, image: $image, brandId: $brandId) {
      name
      type
      image
      id
    }
  }
`;
