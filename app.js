const { app } = require("./server");

const userRoutes = require("./src/routes/user.routes");

app.use("/usuarios", userRoutes);
app.use("/login", require("./src/routes/login.routes"));

app.use("*", (req, res) => {
  res.status(404).send("Endpoint not found");
});

module.exports = { app };
