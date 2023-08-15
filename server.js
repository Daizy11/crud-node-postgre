const { Client } = require("pg");
const dotenv = require("dotenv");
const app = require("./app");
dotenv.config({ path: "./config.env" });
const port = 3000;
app.set("view engine", "ejs");
// with URI
const connectDb = async () => {
  try {
    const client = new Client({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT,
    });

    client.connect().then(() => console.log("database connected"));
  } catch (error) {
    console.log(error);
  }
};

connectDb();

app.listen(3000, () => console.log(`app listened on port ${port} `));
