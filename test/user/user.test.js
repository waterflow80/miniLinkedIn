import {expect, test} from 'vitest'
import generateUser from './userGenerator'


test("Initializing user with random attributes", () => {
  var user1 = generateUser()
  console.log(user1)

  expect(user1.getEducation().Stanford).toBe("Master in Distributed Systems")
  expect(Object.keys(user1.getSkills()).length).toBe(4)
})