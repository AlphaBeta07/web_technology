const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "Public")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "index.html"));
});

app.get("/menu", function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "menu.html"));
});

app.get("/owner", function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "owner.html"));
});

let allOrders = [];

app.post("/saveCart", function (req, res) {
    const order = {
        id: Date.now(),
        items: req.body.cart,
        total: req.body.total,
        time: new Date().toLocaleString()
    };
    allOrders.push(order);
    res.send({ message: "Order placed successfully!", orderId: order.id });
});

app.get("/getOrders", function (req, res) {
    res.send(allOrders);
});

app.listen(3000, function () {
    console.log("Server running at http://localhost:3000");
});