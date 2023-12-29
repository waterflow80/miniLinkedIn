const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
dotenv.config();

const uri = process.env.DB_URI;
export const client = new MongoClient(uri);


async function connect() {
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  }
}

async function closeDb() {
  await client.close();
}

/**Connect to mongodb  */
export function initMongoDb() {
  connect().catch(console.error);
}