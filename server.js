import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import route from "./Router/Routes.js";
// App Config
const app = express();
const port = process.env.PORT || 5000;
// Middleware
app.use(express.json());
app.use(cors());
// DB Config
const pass = "gwtBrYgOuhKQdO0p";
const dbURL = `mongodb://admin:${pass}@cluster0-shard-00-00.whbjn.mongodb.net:27017,cluster0-shard-00-01.whbjn.mongodb.net:27017,cluster0-shard-00-02.whbjn.mongodb.net:27017/tiktokmern?ssl=true&replicaSet=atlas-lmtfdk-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose.connect(dbURL, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const connectDB = mongoose.createConnection(dbURL, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
connectDB.once("open", () => {
  console.log(`DB CONNECTED`);
});
// API Router
app.use("/api/tiktokmern", route);
// Listen
app.listen(port, () => console.log(`connected at http://localhost:5000`));
