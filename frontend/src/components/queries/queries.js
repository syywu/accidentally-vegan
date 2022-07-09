import { gql } from "@apollo/client";

export const getProductsQuery = gql`
  query GetProducts {
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

export const getProductQuery = gql`
  query GetProduct($id: ID) {
    product(id: $id) {
      id
      name
      type
      brand {
        name
        country
        products {
          name
          type
          image
        }
      }
    }
  }
`;
