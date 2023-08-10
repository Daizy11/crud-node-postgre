const {  DataTypes } = require("sequelize");
const sequelize = require("./sequelizeModel");


const Product = sequelize.define("SubProduct", {
  id: {
    type: DataTypes.SERIAL,
    allowNull: false,
  },
  subProduct: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productID:{
    type:DataTypes.string,
    allowNull: false,
  }
  // Define more fields here as needed
});

sequelize.sync()
  .then(() => {
    console.log('Database and tables synced.');
  })
  .catch(error => {
    console.error('Error syncing database:', error);
  });

module.exports = { sequelize, Product };