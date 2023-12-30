import {test, expect} from 'vitest'
import {parseEducation, parseSkills, parseWorkExperience, parseProjects, resumeToUserMap} from '../../controllers/resume_controller.js'

var resumeObj = {
  firstName: 'Mimi',
  lastName: 'Mimou',
  email: 'mimmou@gmail.com',
  phone: '+1548742',
  location: 'New York',
  website: 'mimimou.io',
  company: [ 'Shape' ],
  job: [ 'Developper' ],
  jobDate: [ 'Sept 2019 - Present' ],
  jobDescription: [ 'Developed blah blah blah' ],
  school: [ 'Fsb' ],
  schoolDate: [ '2018 - 2024' ],
  degreeNmajor: [ 'Bachelor in CS' ],
  gpa: [ '3.05' ],
  projectName: [ 'MinilinkedIn', "Seqcol Impl" ],
  projectDate: [ 'Dec 2023' , "Aug 2023"],
  projectDescription: [ 'A mini version of linked in' , "implementation of the seqcol spec"],
  skill: [ 'Java' , 'Python', 'Spring Boot', 'Angular'],
  expertiseLevel: [ 'Advanced' , 'Intermediate', 'Beginner', 'Beginner']
}

test("Test parseEducation", function () { 
  let educationArr = parseEducation(resumeObj)
  expect(educationArr.length).toBe(1)
 })

test("Test parseSkills", function () { 
  let skillsArr = parseSkills(resumeObj)
  expect(skillsArr.length).toBe(4)
 })

test("Test parseProjects", function () { 
  let projectsArr = parseProjects(resumeObj)
  expect(projectsArr.length).toBe(2)
 })

 test("Test parseWorkExperience", function () { 
  let workExperienceArr = parseWorkExperience(resumeObj)
  expect(workExperienceArr.length).toBe(1)
 })

 test("Test resumeToUserMap", () => {
  let user = resumeToUserMap(resumeObj)
  expect(user.getProjects().length).toBe(2)
  expect(user.getExperience().length).toBe(1)
  console.log(user)
  console.log(user.getExperience()[0].company)
 })