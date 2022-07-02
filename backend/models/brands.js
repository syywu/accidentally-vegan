import mongoose from "mongoose";
const Schema = mongoose.Schema();

const brandSchema = new Schema({
  name: String,
  country: String,
});

export default mongoose.model("Brand", brandSchema);
