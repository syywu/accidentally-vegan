import graphql from "graphql";
import _ from "lodash";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphql;

const products = [
  {
    name: "Bournville",
    type: "snack",
    id: "1",
    brandId: "1",
  },
  {
    name: "biscoff",
    type: "snack",
    id: "2",
    brandId: "2",
  },
  {
    name: "biscoff spread",
    type: "spreads",
    id: "3",
    brandId: "2",
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
    brand: {
      type: BrandType,
      resolve(parent, args) {
        return _.find(brands, { id: parent.brandId });
      },
    },
  }),
});

const BrandType = new GraphQLObjectType({
  name: "Brand",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    country: { type: GraphQLString },
    product: {
      // returns a list
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return _.filter(products, { brandId: parent.id });
      },
    },
  }),
});

// how to get to data
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      // resolve grabs data from db/other sources
      resolve(parent, args) {
        return _.find(products, { id: args.id });
      },
    },
    brand: {
      type: BrandType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(brands, { id: args.id });
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return products;
      },
    },
    brands: {
      type: new GraphQLList(BrandType),
      resolve(parent, args) {
        return brands;
      },
    },
  },
});

export const rootQuerySchema = new GraphQLSchema({
  query: RootQuery,
});
