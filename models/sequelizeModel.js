const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
      host: "localhost",
      dialect: "postgres",
      logging:false
    }
);

sequelize.sync()

module.exports = sequelize