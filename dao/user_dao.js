const dotenv = require("dotenv");
dotenv.config();
import {client, initMongoDb} from "./mongodb"

const DB_NAME = process.env.DB_NAME

// init mongodb
initMongoDb()

/**Insert the given record (json/document) into the given collection 
 * @returns the result object
*/
export async function insertOne(record, collection) {
  const result = await client.db(DB_NAME).collection(collection).insertOne(record)

  console.log(`New Listing created with the following id: ${result.insertedId}`)

  return result
}

/**Find all documents within the given collection */
export async function findAll(collection) {
  const documents = await client.db(DB_NAME).collection(collection).find()
  return documents
}


/**Drop the given collection 
 * 
 * @returns boolean true if the operation was succeeded
*/
export async function dropCollection(collection) {
  let dropped = await client.db(DB_NAME).collection(collection).drop()
  return dropped
}