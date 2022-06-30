import express from "express";
import { graphqlHTTP } from "express-graphql";
import { rootQuerySchema } from "./schema/schema.js";

const app = express();
const PORT = 8000;
app.use(
  "/graphql",
  graphqlHTTP({
    schema: rootQuerySchema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
});
