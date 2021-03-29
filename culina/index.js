//Main starting point of the application
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const router = require("./router");
const mongoose = require("mongoose");

//const cors = require("cors");
const app = express();

// App setup
app.use(morgan("combined"));
app.use(bodyParser.json());
const corsOptions = {
  origin: "http://localhost:3000/",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

router(app);

//DB Setup
const mongoUri = `${process.env.MONGO_URI}`;
const connectDb = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
connectDb();

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("server listening on:", port);
