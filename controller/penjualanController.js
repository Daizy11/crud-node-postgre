const penjualanScheme = require("../models/penjualan");

exports.getPenjualan = async (req, res) => {
  try {
    const products = await penjualanScheme.find(); // Retrieve all products from the database
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createPenjualan = async (req, res) => {
  const create = req.body;
  try {
    const newProduct = await penjualanScheme.create(create); // Create a new product in the database
    res.status(201).json({
      status: "success",
      data: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updatePenjualan = async (req, res) => {
  const productId = req.params.id; // Extract the product ID from the URL parameter
  const update = req.body; // Updated product information

  try {
    // Update the product based on the ID and provided attributes
    const [updatedRowCount, updatedProducts] = await penjualanScheme.update(
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

exports.deletePenjualan = async (req, res) => {
  const productId = req.params.id; // Extract the product ID from the URL parameter
  console.log(productId);
  try {
    // Find the product by its ID
    const product = await penjualanScheme.findByPk(productId);

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
