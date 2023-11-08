// File: app.js

const http = require("http");

const port = 8081;

let todoList = ["Complete Node Byte", "Play Cricket"];

http
  .createServer((request, response) => {
    // Set response status code and response headers

    
    if (request.url === "/") {
      // const {method}=request;
      response.write(request.method);
    }
    
    
    
    
    
    else if (request.url === "/todos" && request.method === "GET") {
      response.writeHeader(200, {
        "Content-Type": "text/html",
        Location: "localhost:8081/user/todos",
      });
      const jsonData = JSON.stringify(todoList);
      response.write(jsonData);
    } 
    
    
    
    else if (request.url === "/todos" && request.method === "POST") {
      let requestBody = "";
      request.on("data", (chunk) => {
        requestBody += chunk;
      });
      request.on("end", () => {
        console.log("Received request body:", requestBody);

        const requestData = JSON.parse(requestBody);
        const value = requestData.name;
        todoList.push(value);
      });
      response.writeHead(201);
    } 
    
    
    
    else if (request.method === "DELETE" && request.url === "/todos") {
      let del = false;
      let requestBody = "";
      request.on("data", (chunk) => {
        requestBody += chunk;
      });
      request.on("end", () => {
        console.log("Received request body:", requestBody);

        const requestData = JSON.parse(requestBody);
        const value = requestData.name;

        for (let i = todoList.length - 1; i >= 0; i--) {
          if (todoList[i] === value) {
            todoList.splice(i, 1);
            del = true;
          }
        }
      });
      if (del) {
        response.writeHead(200);
      } else {
        response.writeHead(204);
      }
    }
    
    else if (request.url !== "/todos" && request.method === "GET") {
      response.writeHead(404);
    }
    
    else if (request.url === "/todos" && request.method !== "GET") {
      response.writeHead(501);
    }

    // Set response body i.e, data to be sent

    // Tell the server the response is complete and to close the connection

    response.end();
  })
  .listen(port, () => {
    // Log text to the terminal once the server starts

    console.log(`Nodejs server started on port ${port}`);
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
