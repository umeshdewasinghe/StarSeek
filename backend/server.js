const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use("/api/auth", require("./Routes/userRoutes"));
app.use("/api/user", require("./Routes/userRoutes"));

// Database Connection
const connectDB = require("./db/dbconfig");
connectDB();

//Server starting
// Start the Server
const server = app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);