import graphql from "graphql";

const { GraphQLObjectType, GraphQLString } = graphql;

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
  }),
});

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
