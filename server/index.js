const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { auth } = require("./middlewares/authMdwr");
const mainRoutes = require("./routes");

mongoose
  .connect("mongodb://127.0.0.1:27017/Job-Ads")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error", err.message));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(mainRoutes);

app.listen(5000, () => console.log("Server is listening on port 5000..."));
