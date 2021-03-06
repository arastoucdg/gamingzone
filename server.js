const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

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
  .then(() => console.log("Database connected! đ"))
  .catch((error) => {
    console.log("Database is not connected! âšī¸");
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

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
//app.listen(app.get("port"), () => {
//console.log("Server started on port " + app.get("port"));
//});

app.listen(PORT, () => {
  console.log(`The server đ is listening on port ${PORT}`);
});
