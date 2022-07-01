import graphql from "graphql";
import _ from "lodash";

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

const products = [
  {
    name: "Bournville",
    type: "snack",
    id: "1",
  },
  {
    name: "biscoff",
    type: "snack",
    id: "2",
  },
];

const brands = [
  {
    name: "Cadbury",
    country: "UK",
    id: "1",
  },
  {
    name: "Lotus",
    country: "UK",
    id: "2",
  },
];

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
  }),
});

const BrandType = new GraphQLObjectType({
  name: "Brand",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    country: { type: GraphQLString },
  }),
});

// how to get to data
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db/other sources
        return _.find(products, { id: args.id });
      },
    },
  },
});

export const rootQuerySchema = new GraphQLSchema({
  query: RootQuery,
});
