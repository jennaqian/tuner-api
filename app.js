const cors = require("cors");
const express = require("express");
const tunerController = require("./controllers/songsController.js")

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to TUNER");
});

app.use("/songs", tunerController)

app.get("*", (req, res)=> {
    res.status(404).send("Page not found!")
})

module.exports = app;
