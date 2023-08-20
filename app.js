const express = require("express");
const app = express();
const buku = require("./routes/buku");
const cors = require("cors");
const errorMiddleware = require("./controller/errorController");
// app.post('/submit',crudController.createBuku, catchAsync((req, res) => {
//     const { judul, penerbit , genre,harga} = req.body
//     res.status(201).json({
//         status:"success",
//         data : judul,penerbit,genre,harga
//     })
// }))
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/views"));
app.use(errorMiddleware);

// app.all("*", (req, res, next) => {
//   //handling unhandled route
//   next(new AppError(`Cant fint ${req.originalUrl} on this server`, 404));
// });

app.get("/", (req, res) => {
  res.render("tampilan");
});

//routes
app.use("/api/v1/buku", buku);

module.exports = app;
