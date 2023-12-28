import { expect, test } from "vitest";
import CassandraDriver from '../../dao/cassandra_driver'

let cassandraDriver = new CassandraDriver()
test("Testing cassandra driver instance creator using the singleton patter", () => {
  let exist1 = CassandraDriver.exists
  let instance1 = cassandraDriver.getInstance()
  let exist2 = CassandraDriver.exists
  let instance2 = cassandraDriver.getInstance();

  expect(exist1).toBe(false)
  expect(exist2).toBe(true)
  expect(instance1.options['id']['buffer']).toBe(instance2.options['id']['buffer'])
  // ==> only one instance of cassandra db client will be created throught the whole application
})