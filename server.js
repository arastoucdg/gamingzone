const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
const port = 3001;

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
//app.set("port", process.env.PORT || 4000);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());

const initializePassport = require("./passport-config");
initializePassport(passport);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database connected! 😍"))
  .catch((error) => {
    console.log("Database is not connected! ☹️");
    console.log(error);
  });

const orderRoutes = require("./routes/orderRoutes");
const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const userRoutes = require("./routes/userRoutes");

const getall = require("./routes/orderRoutes");

app.use("/orders", orderRoutes);
app.use("/customers", customerRoutes);
app.use("/products", productRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/users", userRoutes);

app.use("/all", getall);

app.all("*", (req, res) => {
  res.status(500);
  res.send("Invalid path");
});
//app.listen(app.get("port"), () => {
//console.log("Server started on port " + app.get("port"));
//});

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
});
