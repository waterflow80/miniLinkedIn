const dotenv = require("dotenv")
dotenv.config()

var MongoClient = require("mongodb").MongoClient;
var url = `mongodb://${process.env.SERVER}:27017/${process.env.DATABASE_NAME}`;

console.log(url);
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

console.log("finish");
