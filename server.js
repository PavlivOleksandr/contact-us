const path = require("path");
const express = require("express");

const app = express();
const rootRouter = express.Router();

const buildPath = path.normalize(path.join(__dirname, "../build"));
app.use(express.static(buildPath));

rootRouter.get("(/*)?", async (req, res, next) => {
  res.sendFile(path.join(buildPath, "index.html"));
});
app.use(rootRouter);
