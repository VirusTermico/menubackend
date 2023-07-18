const express = require("express");
const app = express();
const http = require("http");

const cors = require("cors");

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const Emitter = require("events");
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/2", (req, res) => {
  res.sendFile(__dirname + "/site.html");
});
const eventEmitter = new Emitter();
app.set("eventEmitter", eventEmitter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

const pedidos = [
  {
    orderId: "1",
    table: "1",
    products: [
      { id: "1", name: "Bolo" },
      { id: "1", name: "Sumo" },
      { id: "1", name: "Gelado" },
    ],
    user: "1",
    status: "Waiting",
  },
  {
    orderId: "2",
    table: "2",
    products: [
      { id: "1", name: "Bolo" },
      { id: "1", name: "Sumo" },
      { id: "1", name: "Gelado" },
    ],
    user: "2",
    status: "Done",
  },
  {
    orderId: "3",
    table: "3",
    products: [
      { id: "1", name: "Bolo" },
      { id: "1", name: "Sumo" },
    ],
    user: "3",
    status: "Canceled",
  },
];
app.get("/api/v1/orders", (req, res) => {
  return res.status(200).json(pedidos);
});

app.post("/api/v1/orders", (req, res) => {
  const eventEmitter = req.app.get("eventEmitter");
  pedidos.push({
    orderId: pedidos.length + 1,
    table: pedidos.length / 2,
    products: [
      { id: "1", name: "Bolo" },
      { id: "2", name: "Sumo" },
    ],
    user: "6",
    status: "WAITING",
  });
  eventEmitter.emit("newOrder", {
    id: 4,
  });

  console.log(req.body)

  res.status(200).json({ sucess: true, data: "Novo pedido" });
});
// POST method route
app.patch("/api/v1/orders/:id", (req, res) => {
  //category owner
  //req.body.user = req.user.id;
  eventEmitter.emit("orderUpdated", {
    id: 12,
  });
  //const orderDetail= await order.populate('products.product')

  res.status(200).json({ sucess: true, data: "pedido sucesso" });
});

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("join", (orderId) => {
    console.log("order", orderId); // 1
    socket.join(orderId);
  });
  socket.on("newOrder", (orderId) => {
    console.log("order", orderId); // 1
  });
});

eventEmitter.on("orderUpdated", (data) => {
  io.to(`order_${data.id}`).emit("orderUpdated", data);
});
eventEmitter.on("newOrder", (data) => {
  io.to(`order_${data.id}`).emit("newOrder", data);
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
