const productScheme = require("../models/productModels");

exports.getProduct = async (req, res) => {
  const { page, limit, sort, fields, ...filters } = req.query;

  const parsedPage = parseInt(page) || 1;
  const parsedLimit = parseInt(limit) || 10;
  const offset = (parsedPage - 1) * parsedLimit;

  const sequelizeFilters = Object.keys(filters).reduce((acc, key) => {
    acc[key] = { [Op.like]: `%${filters[key]}%` };
    return acc;
  }, {});

  const order = sort ? [sort.split(",")] : [["createdAt", "ASC"]];

  try {
    const products = await productScheme.findAll({
      where: sequelizeFilters,
      order,
      attributes: fields ? fields.split(",") : undefined,
      offset,
      limit: parsedLimit,
    }); // Retrieve all products from the database
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


exports.createProduct = async (req, res) => {
  const create = req.body;
  try {
    const newProduct = await productScheme.create({
      id: req.body.id,
      product: req.body.product,
      productCategoryID: req.body.productCategoryID,
    }); // Create a new product in the database
    res.status(201).json({
      status: "success",
      data: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateMetode = async (req, res) => {
  const productId = req.params.id; // Extract the product ID from the URL parameter
  const update = req.body; // Updated product information

  try {
    // Update the product based on the ID and provided attributes
    const [updatedRowCount, updatedProducts] = await productScheme.update(
      update, // Updated attributes
      { where: { id: productId }, returning: true } // Update condition and options
    );

    if (updatedRowCount === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(updatedProducts[0]); // Return the updated product
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteMetode = async (req, res) => {
  const productId = req.params.id; // Extract the product ID from the URL parameter

  try {
    // Find the product by its ID
    const product = await productScheme.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Delete the product
    await product.destroy();

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// exports.pagination = async (req, res) => {
//   const page = req.query.page * 1 || 1;
//   const limit = req.query.limit * 1 || 100;
//   const skip = (page - 1) * limit;
//   await productScheme.findAll().skip(skip).limit(limit);
// };
