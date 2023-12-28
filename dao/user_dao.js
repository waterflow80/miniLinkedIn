import CassandraDriver from "./cassandra_driver";



export default class UserDao {

  constructor() {
    this.cassandraDriver = new CassandraDriver();
  }

  /**Insert the given user to the database */
  insert(user) {

  }

  /**Get the user with the given id */
  getById(id) {

  }

  /**Get all users */
  getAll() {

  }

  /**Delete user with the given id */
  deleteById(id) {

  } 

  /**Delete all users */
  deleteAll() {

  }
}