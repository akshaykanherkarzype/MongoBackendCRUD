const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

const { connection } = require("./Config/config");

const userController = require("./Controllers/user.routes");
const NotesController = require("./Controllers/notes.route");
const Authentication = require("./Middlewares/Authentication");

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/user", userController);
app.use("/notes", Authentication, NotesController);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to server");
  } catch (err) {
    console.log(err);
  }
  console.log("listening on 8080 port");
});
