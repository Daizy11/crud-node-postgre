const { DataTypes } = require("sequelize");
const sequelize = require("./sequelizeModel");

const Product = sequelize.define("penjualan", {
  id: {
    type: DataTypes.SERIAL,
    allowNull: false,
  },
  metodePembayaran: {
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
  waktuTransaksi: {
    type: DataTypes.TIMESTAMP,
    allowNull: false,
  },
  discount: {
    type: DataTypes.STRING(3),
  },
  jumlahDibayar: {
    type: DataTypes.NUMERIC,
    allowNull: false,
  },
  keterangan: {
    type: DataTypes.STRING(30),
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
