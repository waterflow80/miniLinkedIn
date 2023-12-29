const dotenv = require("dotenv");
const cassandra = require("cassandra-driver");
const logger = require("pino")();

// dotenv init
dotenv.config();

/**Cassandra instance implementing the singleton pattern */
export default class CassandraDriver {
  static keyspace = process.env.KEYSPACE;
  static dataCenter = process.env.DATACENTER;
  static contactPoints = [process.env.SERVER];
  static exists = false;
  static instance = null;

  constructor() {}

  /**Return a unique instance of cassandra client
   * Singleton Pattern
   */
  getInstance = function () {
    if (CassandraDriver.exists == false) {
      CassandraDriver.instance = new cassandra.Client({
        contactPoints: CassandraDriver.contactPoints,
        keyspace: CassandraDriver.keyspace,
        localDataCenter: CassandraDriver.dataCenter,
      });
      CassandraDriver.exists = true;
      return CassandraDriver.instance;
    } else {
      return CassandraDriver.instance;
    }
  };

  /**Transform an array of elements (strings) into one single string
   * seperated by ',' (comma)
   * @example ["id", "name", "age"] ==> "id, name, age"
   */
  arrayToString = function (arr) {
    let result = "";
    for (let elt of arr) {
      result += elt + ", ";
    }
    return result.slice(0, result.length - 2);
  };

  /**Insert into the given table the provided values
   * @param table the table name
   * @param columns array that contain the names of the columns
   * @param values the values to be inserted in each column
   *
   */
  insertQuery = async function (query) {
    let client = this.getInstance();
    console.log("Query= " + query);

    console.log("test");
    await client.execute(query);
    console.log("result: ", result);
  };

  /**Perform a SELECT * FROM table;
   * @param table table name
   *
   * @returns rows | null
   */
  selectAllQuery = function (table) {
    let client = this.getInstance();
    let sql_select = "SELECT * FROM " + table;
    let parameters = [];
    client.execute(sql_select, parameters, (error, result) => {
      if (error != undefined) {
        logger.error("Error:", error);
        return null;
      } else {
        logger.info("Executing a select query " + sql_select);
        return result.rows;
      }
    });
  };
}
