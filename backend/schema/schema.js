import graphql from "graphql";
import _ from "lodash";
import Product from "../models/products.js";
import Brand from "../models/brands.js";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphql;

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    type: { type: GraphQLString },
    brand: {
      type: BrandType,
      resolve(parent, args) {
        // return _.find(brands, { id: parent.brandId });
        return Brand.findById(parent.brandId);
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
        // return _.filter(products, { brandId: parent.id });
        return Product.find({ brandId: parent.id });
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
        // return _.find(products, { id: args.id });
        return Product.find(args.id);
      },
    },
    brand: {
      type: BrandType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(brands, { id: args.id });
        return Brand.find(args.id);
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        // return products;
      },
    },
    brands: {
      type: new GraphQLList(BrandType),
      resolve(parent, args) {
        // return brands;
      },
    },
  },
});

// allows you to add/ delete data
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addBrand: {
      type: BrandType,
      args: {
        name: { type: GraphQLString },
        country: { type: GraphQLString },
      },
      resolve(parent, args) {
        let brand = new Brand({
          name: args.name,
          country: args.country,
        });
        return brand.save();
      },
    },
    addProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        image: { type: GraphQLString },
        brandId: { type: GraphQLID },
      },
      resolve(parent, args) {
        let product = new Product({
          name: args.name,
          type: args.type,
          image: args.image,
          brandId: args.brandId,
        });
        return product.save();
      },
    },
  },
});

export const rootQuerySchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
