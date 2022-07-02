import mongoose from "mongoose";

const brandSchema = mongoose.Schema({
  name: String,
  country: String,
});

export default mongoose.model("Brand", brandSchema);
