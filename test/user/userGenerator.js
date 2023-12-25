import User from "../../entities/user"

export default function generateUser(id) {
  var user1 = new User()
  user1.setId(id)
  user1.setEmail(`fakeuser${id}@gmail.com`)
  user1.setBirthDate(new Date(`${id}: Jannuary 6, 1997`))
  user1.setBio(`${id}: I am a cs student and I'm very passionate about programming\n`)
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