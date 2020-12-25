import express from "express";
import defineModelDB from "../ModelDB/DBmodel.js";

const route = express.Router();
route.get("/", async (req, res) => {
  const datadb = await defineModelDB.find({});
  res.send(datadb);
});
route.post("/", async (req, res) => {
  await defineModelDB.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
export default route;
