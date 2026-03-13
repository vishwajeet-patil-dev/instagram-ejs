const express = require("express");
const path = require("path");
const webRoutes = require("./routes/webRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "../public")));

app.use("/", webRoutes);
app.use("/api", apiRoutes);

module.exports = app;
