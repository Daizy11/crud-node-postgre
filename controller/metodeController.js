const metodeScheme = require("../models/metodebayar");

exports.getMetode = async (req, res) => {
  try {
    const products = await metodeScheme.findAll(); // Retrieve all products from the database
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error" }, console.log(error));
  }
};

exports.createMetode = async (req, res) => {
  const create = req.body;
 
  try {
    const newProduct = await metodeScheme.create({
     
      metodePembayaran: req.body.metodePembayaran,
    }); // Create a new product in the database
    res.status(201).json({
      status: "success",
      data: newProduct,
    });
  } catch (error) {
    console.error("Error creating pembayaran:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateMetode = async (req, res) => {
  const productId = req.params.id; // Extract the product ID from the URL parameter
  const update = req.body; // Updated product information

  try {
    // Update the product based on the ID and provided attributes
    const [updatedRowCount, updatedProducts] = await metodeScheme.update(
      update, // Updated attributes
      { where: { id: productId }, returning: true } // Update condition and options
    );

    if (updatedRowCount === 0) {
      return res.status(404).json({ error: "Pembayaran not found" });
    }

    res.json(updatedProducts[0]); // Return the updated product
  } catch (error) {
    console.error("Error updating pembayaran:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteMetode = async (req, res) => {
  const productId = req.params.id; // Extract the product ID from the URL parameter

  try {
    // Find the product by its ID
    const product = await metodeScheme.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "pembayaran not found" });
    }

    // Delete the product
    await product.destroy();

    res.json({ message: "pembayaran deleted successfully" });
  } catch (error) {
    console.error("Error deleting pembayaran:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
