const {  DataTypes } = require("sequelize");
const sequelize = require('./sequelizeModel')



const Product = sequelize.define("productCategory", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true, 
  },
  productCategory:{
    type:DataTypes.STRING(10),
    allowNull: false,
  }
  // Define more fields here as needed
});



module.exports = Product 