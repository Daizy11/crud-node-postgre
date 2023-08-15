const express = require("express");
const app = express();
const metode = require("./router/metodeRouter");
const productCat = require("./router/productCatRouter");
const product = require("./router/productRoute");
const cors = require("cors");

app.use(express.json());
app.use(express.static(__dirname + "/views"));
app.use(cors());

app.get("/", (req, res) => {
  res.render("pembayaran");
});
app.get("/add", (req, res) => {
  res.render("add");
});
app.get("/product", (req, res) => {
  fetch("http://127.0.0.1:3000/api/product", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      //  console.log(data.data)
      res.render("product", {
        users: data,
      });
    });
});
app.get("/productCat", (req, res) => {
  res.render("productCat");
});

app.get("/edit/:id", (req, res) => {
  fetch("http://127.0.0.1:3000/api/product", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {

      res.render("edit_", {
        users: data,
      });
      
    });
});

app.post('/update/:id')

//router
// app.use('/api/stock', routes);
app.use("/api/metodeBayar", metode);
app.use("/api/productCategory", productCat);
app.use("/api/product", product);

module.exports = app;
