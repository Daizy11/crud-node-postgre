const scheme = require("../models/crudSchema");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createBuku = catchAsync(async (req, res) => {
  const create = await scheme.create({
    no:req.body.no,
    judul: req.body.judul,
    penerbit: req.body.penerbit,
    genre:req.body.genre,
    harga:req.body.harga
  });
  console.log(create);
  res.status(201).json({
    status: "success",
    data: {
      tour: create,
    },
  });
});

exports.getBuku = catchAsync(async (req, res, next) => {
  const getBuku = await scheme.find();
  console.log(getBuku)
  res.status(201).json({
    status: "success",
    data: {
      getBuku,
    },
  });
});

exports.updateBuku = catchAsync(async (req, res, next) => {
  const updateBuku = await scheme.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // show new response of postman
    runValidators: true,
  });

  if (!updateBuku) {
    return next(new AppError("The field doesnt exist with that ID", 404));
  }

  res.status(201).json({
    status: "success",
    data: updateBuku,
  });
});

exports.deleteBuku = catchAsync(async (req, res, next) => {
  const deleteBuku = await scheme.findByIdAndDelete(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    status: "success",
  });
});
