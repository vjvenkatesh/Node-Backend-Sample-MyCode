require("dotenv").config();

const express = require("express");
const app = express();
const port = 8081;

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

// app.get("/todos", (req, res) => {
//   res.send(todoList);
// });

// app.post("/todos", (req, res) => {
//   const { name } = req.body;
//   if (name) {
//     todoList.push(name);
//     res.status(201).send();
//   } else {
//     res.status(400).send("Bad Request: Name is required in the request body.");
//   }
// });

// app.delete("/todos", (req, res) => {
//   let del = false;
//   let { name } = req.body;
//   for (let i = todoList.length - 1; i >= 0; i--) {
//     if (todoList[i] === name) {
//       todoList.splice(i, 1);
//       del = true;
//     }
//   }
//   if (del) {
//     res.status(204).send();
//   } else {
//     res.status(500).send();
//   }
// });

// app.all("/todos", (request, response) => {
//   response.status(501).send();
// });
