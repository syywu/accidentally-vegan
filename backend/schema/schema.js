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
