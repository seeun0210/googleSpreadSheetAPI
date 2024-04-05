const express = require("express");
const dotenv = require("dotenv");
const app = express();
const indexRouter = require("./routes/index");
const { createServer } = require("http");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);
const httpServer = createServer(app);
httpServer.listen(3000, () => {
  console.log(`server open on port 3000`);
});
