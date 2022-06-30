import express from "express";
import { graphqlHTTP } from "express-graphql";

const app = express();
const PORT = 8000;
app.use("/graphql", graphqlHTTP());

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
});
