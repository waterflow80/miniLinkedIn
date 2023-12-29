import { expect, test } from "vitest";
import { insertOne, findAll, dropCollection } from "../../dao/user_dao";

test("Test inserting a record into the 'user' collection", async () => {
  let record = {
    name: "james",
    email: "james@yahoo.uk",
    education: [
      {
        university: "MIT",
        course: "Bachelor of CS",
        graduationDate: new Date("2019-02-14"),
      },
    ],
    age: 22,
  };

  let insertedRecord = await insertOne(record, "user")
  expect(insertedRecord.acknowledged).toBe(true);
  await dropCollection("user")
});


test("Test find all documents of the 'user' collection", async function () { 
  // inserting a fiew documents
  let record1 = {
    name: "james",
    email: "james@yahoo.uk",
    education: [
      {
        university: "MIT",
        course: "Bachelor of CS",
        graduationDate: new Date("2019-02-14"),
      },
    ],
    age: 22,
  };

  let record2 = {
    name: "Sami",
    email: "sami@yahoo.uk",
    education: [
      {
        university: "Stanford",
        course: "Bachelor of UX design",
        graduationDate: new Date("2022-02-14"),
      },
    ],
    age: 22,
  };
  await insertOne(record1, "user")
  await insertOne(record2, "user")

  let documents = await findAll("user")
  let docsCount = await documents.count()
  expect(docsCount).toBe(2)

  await dropCollection("user")
})