import mongoose from "mongoose";
const Schema = mongoose.Schema();

const productSchema = new Schema({
  name: String,
  type: String,
  brandId: String,
});

export default mongoose.model("Product", productSchema);
