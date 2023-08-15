const {  DataTypes } = require("sequelize");
const sequelize = require("./sequelizeModel");



const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true
  },
  product: {
    type: DataTypes.STRING(19),
    allowNull: false,
  },
  productCategoryID:{
    type:DataTypes.STRING(10),
    allowNull: false,
  }
  // Define more fields here as needed
});


module.exports =  Product;