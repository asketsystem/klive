const express = require("express");
const app = express();
const server = require("http").Server(app);

app.get("/", function (req, res) {
  res.render("room");
});

server.listen(3030);

app.set("view engine", "ejs");

app.use(express.static("public"));
