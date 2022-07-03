import express from "express";
import { graphqlHTTP } from "express-graphql";
import { rootQuerySchema } from "./schema/schema.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 8000;

mongoose.connect("mongodb://localhost:27017/accidentally-vegan");
mongoose.connection.once("open", () => {
  console.log("connected to db");
});

app.use(cors());

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
