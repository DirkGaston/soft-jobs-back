const app = require("./server");

app.use("/login", require("./src/routes/login.routes"));
app.use("/usuarios", require("./src/routes/user.routes"));

module.exports = app;
