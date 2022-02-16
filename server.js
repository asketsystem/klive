const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.param.room });
});

server.listen(3030);

app.set("view engine", "ejs");

app.use(express.static("public"));
