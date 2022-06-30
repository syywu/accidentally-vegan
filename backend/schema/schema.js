import graphql from "graphql";

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
  }),
});

// how to get to data
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    product: {
      type: ProductType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from db/other sources
      },
    },
  },
});

export const rootQuerySchema = new GraphQLSchema({
  query: RootQuery,
});
