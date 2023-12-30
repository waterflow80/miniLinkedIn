import User from "../entities/user";

/**Transform the given resume (json format) into
 * a User entity
 */
export function resumeToUserMap(resume) {
  let user = new User();
  user.setFirstName(resume["firstName"]);
  user.setLastName(resume["lastName"]);
  user.setEmail(resume["email"]);
  user.setPhone(resume["phone"]);
  user.setBio(resume["bio"]);
  user.setLocation(resume["location"]);
  user.setWebsite(resume["website"]);
  user.setEducation(parseEducation(resume));
  user.setExperience(parseWorkExperience(resume));
  user.setProjects(parseProjects(resume));
  user.setSkills(parseSkills(resume));

  return user;
}

/**Retrieve the education information in an array of json
 * format
 *
 * @returns array of json
 */
export function parseEducation(resume) {
  let educationArrayCount = resume["school"].length;
  let educationArray = [];
  for (let i = 0; i < educationArrayCount; i++) {
    let education = new Object();
    education.school = resume["school"][i];
    education.schoolDate = resume["schoolDate"][i];
    education.degreeNmajor = resume["degreeNmajor"][i];
    education.gpa = resume["gpa"][i];
    educationArray.push(education);
  }
  return educationArray;
}

/**Retrive the projects's information in an array of json
 * format
 *
 * @returns array of json
 */
export function parseProjects(resume) {
  let projectsArrayCount = resume["projectName"].length;
  let projectsArray = [];
  for (let i = 0; i < projectsArrayCount; i++) {
    let project = new Object();
    project.projectName = resume["projectName"][i];
    project.projectDate = resume["projectDate"][i];
    project.projectDescription = resume["projectDescription"][i];
    projectsArray.push(project);
  }
  return projectsArray;
}

/**Retrieve the work experience's information in an array of json
 * format
 *
 * @returns array of json
 */
export function parseWorkExperience(resume) {
  let workExperienceArrayCount = resume["job"].length;
  let WorkExperienceArray = [];
  for (let i = 0; i < workExperienceArrayCount; i++) {
    let job1 = new Object();
    job1.job = resume["job"][i];
    job1.jobDate = resume["jobDate"][i];
    job1.jobDescription = resume["jobDescription"][i];
    job1.company = resume["company"][i];
    WorkExperienceArray.push(job1);
  }
  return WorkExperienceArray;
}

/**Retrieve the skills' information in an array of json
 * format
 *
 * @returns array of json
 */
export function parseSkills(resume) {
  let skillsArrayCount = resume["skill"].length;
  let skillsArray = [];
  for (let i = 0; i < skillsArrayCount; i++) {
    let skill = new Object();
    skill.skill = resume["skill"][i];
    skill.expertiseLevel = resume["expertiseLevel"][i];
    skillsArray.push(skill);
  }
  return skillsArray;
}

//Creating the resume HTML temlplate out of the   ///
// given user's data using ES6 instead of JQuery ///

// Overview Section
/**Generate the HTML section of the given user's
 * overview info
 */
function generateUserOverviewHTML(user) {
  console.log("Generate testing ...");
  let firstName = user.getFirstName();
  let lastName = user.getLastName();
  let phone = user.getPhone();
  let email = user.getEmail();
  let bio = user.getBio();
  let website = user.getWebsite();
  let location = user.getLocation();

  let overviewSection = document.querySelector(".overview-section");
  console.log("overview section: ", overviewSection);
  let fullNameHTML = overviewSection.querySelector("#fullName");
  let emailHTML = overviewSection.querySelector("#email");
  let bioHTML = overviewSection.querySelector("#bio");
  let phoneHTML = overviewSection.querySelector("#phone");
  let locationHTML = overviewSection.querySelector("#location");
  let websiteHTML = overviewSection.querySelector("#website");

  console.log("website: ", website);

  fullNameHTML.innerHTML = firstName + " " + lastName;
  emailHTML.innerHTML = email;
  bioHTML.innerHTML = bio;
  phoneHTML.innerHTML = phone;
  locationHTML.innerHTML = location;
  websiteHTML.innerHTML = website;
}
// Work Experience

// Education

// Project

// Skills

// TODO: add an id to each class for array types to distinguish between HTML elements
