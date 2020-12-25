import mongoose from "mongoose";

const dbSchemaModel = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});
const defineModelDB = mongoose.model("Tiktok", dbSchemaModel);
export default defineModelDB;
