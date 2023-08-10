const {  DataTypes } = require("sequelize");
const sequelize = require('./sequelizeModel')

const Product = sequelize.define("MetodePembayarans", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  metodePembayaran: {
    type: DataTypes.STRING(19),
   
  },
  
  // Define more fields here as needed
});
module.exports =  Product ;


