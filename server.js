const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const errorHandler = require("./src/middlewares/error");
const {
  authRoute,
  placeRoute,
  categoryRoute,
  extraRoute,
  productRoute,
  reviewRoute,
  favoriteRoute,
} = require("./src/routes/index.routes");

const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const connectDB = require("./src/config/db");
const cors = require("cors");
const { Server } = require("socket.io");
dotenv.config({ path: "./src/config/config.env" });
const http = require("http");
const OrderModel = require("./src/models/order.model");

connectDB();

const app = express();
const server = http.createServer(app);

const io = new Server(server);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({ origin: "*" }));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(fileUpload());
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/places", placeRoute);
app.use("/api/v1/categories", categoryRoute);
app.use("/api/v1/extra", extraRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/favorites", favoriteRoute);

app.post("/api/v1/orders", async (req, res) => {
  try {
    const { table, products } = req.body;
    const order = await OrderModel.create({ table, products });
    const orderDetail= await order.populate('products.product')
    io.emit("order@new", orderDetail);
    console.log(orderDetail)
    res.status(200).json(order);
  } catch (error) {}
});

app.get("/api/v1/orders", async (req, res) => {
  try {
    const orders = await OrderModel.find().populate("products.product");
    res.json(orders);
  } catch (error) {
    res.sendStatus(500)
  }
});
app.patch("/api/v1/orders/orderId", (req, res) => {});
app.delete("/api/v1/orders/orderId", (req, res) => {});
//handle errors
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
server.listen(
  PORT,
  console.log(`Rodando em ${process.env.NODE_ENV} na porta ${PORT}`)
);

server.on("unhandledRejection", (err, promise) => {
  console.log(`Erro: ${err.message}`);

  server.close(() => process.exit(1));
});
