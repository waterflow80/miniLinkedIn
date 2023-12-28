const dotenv = require("dotenv");
let cassandra = require("cassandra-driver");

// dotenv init
dotenv.config()

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
}
