import User from "../../entities/user"

export default function generateUser(id) {
  var user1 = new User()
  user1.setId(id)
  user1.setEmail(`fakeuser${id}@gmail.com`)
  user1.setBio(`${id}: Software Engineering Student\n`)
  user1.setLocation("New York")
  user1.setPhone("+1254865684")
  user1.setWebsite("mimou.io")
  let education = {}
  education["Penn_State_High_School"] = "High School Diploma"
  education["MIT"] = "Bachelor in Computer Science"
  education["Stanford"] = "Master in Distributed Systems"
  user1.setEducation(education)
  let experience = {}
  experience["Apache"] = "Software developer intern. Jun 2022 to Aug 2022"
  user1.setExperience(experience)
  let skills = {}
  skills["Java"] = "Advanced"
  skills["Spring_Boot"] = "Intermediate"
  skills["Postgres"] = "Advanced"
  skills["Git_Github_Actions"] = "Intermediate"
  user1.setSkills(skills)

  return user1
}