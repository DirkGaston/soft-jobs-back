const express = require('express')
const app = require("./server");

app.use("/login", require("./src/routes/login.routes"));
app.use("/usuarios", require("./src/routes/user.routes.js"))
app.use("*", (req, res) => {
  res.status(404).send("Endpoint not found");
});

module.exports = app;
