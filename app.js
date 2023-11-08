require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");
const app = express();
const port = 8081;

const DB_URI = "mongodb://127.0.0.1:27017/qtravels";

mongoose
  .connect(DB_URI)
  .then(() => console.log("db connected"))
  .catch((err) => console.log("Error", err));

app.use(express.json());

const { verifyAuth } = require("./middlewares/verifyAuth.js");

const currencyRoutes = require("./routes/currencies.routes.js");

const userRoutes = require("./routes/users.routes.js");

//for middleware to protect all the endpoints
app.use(verifyAuth);

//currencies-controller
app.use("/currencies", currencyRoutes);

//user-controller

app.use("/users", userRoutes);

app.all("*", (request, response) => {
  response.status(404);

  // response.send("Method Not Found ");
  response.write("hello");
  response.end();
});

app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
