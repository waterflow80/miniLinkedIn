import { expect, test } from "vitest";
import CassandraDriver from "../../dao/cassandra_driver";

let cassandraDriver = new CassandraDriver();
test("Testing cassandra driver instance creator using the singleton patter", () => {
  let exist1 = CassandraDriver.exists;
  let instance1 = cassandraDriver.getInstance();
  let exist2 = CassandraDriver.exists;
  let instance2 = cassandraDriver.getInstance();

  expect(exist1).toBe(false);
  expect(exist2).toBe(true);
  expect(instance1.options["id"]["buffer"]).toBe(
    instance2.options["id"]["buffer"]
  );
  // ==> only one instance of cassandra db client will be created throught the whole application
});

test("Testing the arrayToString method", () => {
  let arr = ["id", "name", "age", "location"];
  expect(cassandraDriver.arrayToString(arr)).toBe("id, name, age, location");
});

test("Testing the insert query on cassandra user table", () => {
  const sql_isnert = "INSERT INTO user (id, birthdate, education, email, experience, firstname, lastname, projects, skills) VALUES (uuid(), '1999-11-22', 'MIT, Bachelor of CS, GPA 3.7, May 2016', 'james@gmail.com', 'Apache, Software Devleopper, Developed blah balh balh, 2016', 'james', 'weeb', 'ProjectX, blah blah, blah blah', 'Python Beginner, Java advanced');"

  let result = cassandraDriver.insertQuery(sql_isnert)
  expect(result).toBe(true);
});

test("Testing the select * from user", () => {
  const cql_select ="SELECT * FROM user;";

  let rows = cassandraDriver.selectAllQuery("user");
  expect(rows).toBe("")
})


