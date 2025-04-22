const express = require("express");
const { dbConnection } = require("./db");
const cors = require("cors");
// step 1: import

const app = express();
// step 2: create app object
const PORT = 3001;
// step 3: Create PORT variable

app.use(express.json());
app.use(cors());


dbConnection();
// Creating an API
// 1.http method
// 2.endpoint
// 3.callback function
app.get("/", (req, res) => {
  res.send("its my first API ");
});

app.get("/coffe", (req, res) => {
  res.send("have some cofee ");
});
app.get("/hello", (req, res) => {
  res.send("say hello ");
});

app.use("/api/category", require("./routes/categoryRoute"));

// step 4: listen the server
app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`);
});

//intalls cors "npm i cors" to accept and connect with forntend
// cors :course origin resourse sharing
