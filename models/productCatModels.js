const {  DataTypes } = require("sequelize");
const sequelize = require("./sequelizeModel");



const Product = sequelize.define("ProductCategory", {
  id: {
    type: DataTypes.SERIAL,
    allowNull: false,
  },
  productCategoryID:{
    type:DataTypes.string(10),
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