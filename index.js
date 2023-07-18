const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./src/config/config.env" });

const morgan = require("morgan");
const errorHandler = require("./src/middlewares/error");
const Emitter=require('events');
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const connectDB = require("./src/config/db");
const cors = require("cors");
const http = require("http");
const {
  authRoute,
  placeRoute,
  categoryRoute,
  extraRoute,
  productRoute,
  reviewRoute,
  favoriteRoute,
  orderRoute,
} = require("./src/routes/index.routes");



connectDB();

const app = express();
const server = http.createServer(app);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "*" }));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}


const eventEmitter=new Emitter()

app.set('eventEmitter',eventEmitter)

const PORT = process.env.PORT || 8000;
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
	},
});
io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("join", (orderId) => {
    socket.join(orderId);
    socket.join("orders");
  });
  socket.on("newOrder", (order) => {
    console.log("novos pedidos",order)
    socket.join(order.data._id);

    socket.emit("orders",order)
  });

  
  
});

eventEmitter.on("orderUpdated", (data) => {
  io.to(`order_${data.id}`).emit("orderUpdated", data);
  console.log(data)
  io.to(`adminRoom`).emit("orderUpdated", data);

});
eventEmitter.on("orderPlaced", (data) => {
  io.to(`adminRoom`).emit("orderPlaced", data);

});

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
app.use("/api/v1/orders", orderRoute);

//handle errors
app.use(errorHandler);



server.listen(PORT, () => {
  console.log("listening on ",PORT);
});


server.on("unhandledRejection", (err, promise) => {
  console.log(`Erro: ${err.message}`);

  server.close(() => process.exit(1));
});


