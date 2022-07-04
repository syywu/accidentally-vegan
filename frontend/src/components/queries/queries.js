import { gql } from "@apollo/client";

export const getProductQuery = gql`
  {
    products {
      name
      type
      image
      id
    }
  }
`;

export const getBrandQuery = gql`
  {
    brands {
      name
      country
      id
    }
  }
`;
