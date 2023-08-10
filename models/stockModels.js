const {  DataTypes } = require("sequelize");
const sequelize = require("./sequelizeModel");



const Product = sequelize.define("stock", {
  id: {
    type: DataTypes.SERIAL,
    allowNull: false,
  },
  nama: {
    type: DataTypes.STRING(19),
    allowNull: false,
  },
  subProductID: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.NUMERIC,
    allowNull: false,
  },
  hargaPokok: {
    type: DataTypes.NUMERIC,
    allowNull: false,
  },
  hargaJual: {
    type: DataTypes.NUMERIC,
    allowNull: false,
  },
  // Define more fields here as needed
});

sequelize
  .sync()
  .then(() => {
    console.log("Database and tables synced.");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

module.exports = { sequelize, Product };
