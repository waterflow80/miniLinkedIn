export default class User {
  _id;
  _email
  _firstName
  _lastName
  _birthDate
  _bio
  _education
  _experience
  _skills
  _otherInfo

  constructor() {}
  // constructor(id, email, firstName, lastName, birthDate, bio, education, experience, skills, otherInfo) {
  //   this.#id = id;
  //   this.#email = email;
  //   this.#firstName = firstName
  //   this.#lastName = lastName
  //   this.#birthDate = birthDate
  //   this.#bio = bio
  //   this.#education = education
  //   this.#experience = experience
  //   this.#skills = skills
  //   this.#otherInfo = otherInfo
  // }

  // Getters 
  getId() {
    return this._id;
  } 
  getEmail() {
    return this._email
  }
  getFirstName() {
    return this._firstName
  }
  getLastName() {
    return this._lastName
  }
  getBirthDate() {
    return this._birthDate
  } 
  getBio() {
    return this._bio
  }
  getEducation() {
    return this._education
  }
  getExperience() {
    return this._experience
  }
  getSkills() {
    return this._skills
  }
  getOtherInfo() {
    return this._otherInfo
  }

  // Setters
  setId(id) {
    this._id = id
  }
  setEmail(email) {
    this._email = email
  }
  setFirstName(firstName) {
    this._firstName = firstName
  }
  setLastName(lastName) {
    this._lastName = lastName
  }
  setBirthDate(birthDate) {
    this._birthDate = birthDate
  }
  setBio(bio) {
    this._bio = bio
  }
  setEducation(education) {
    this._education = education
  }
  setExperience(experience) {
    this.experience = experience
  }
  setSkills(skills) {
    this._skills = skills
  }
  setOtherInfo(otherInfo) {
    this._otherInfo = otherInfo
  }

  toString() {
    return `{ ${this._firstName} ${this._lastName} \n
    Id: ${this._id} \n
    Email: ${this._email} \n
    Birthdate: ${this._birthDate} \n
    Bio: ${this._bio} \n
    Education: ${this._education} \n
    Experience: ${this._experience} \n
    Skills: ${this._skills} \n
    OtherInfo: ${this._otherInfo} }`
  }
}