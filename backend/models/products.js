import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  type: String,
  brandId: String,
});

export default mongoose.model("Product", productSchema);
