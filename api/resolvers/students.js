const StudentModel = require("../models/Students");

async function getStudents() {
  return new Promise(async resolve => {
    const students = await StudentModel.find({});
    return resolve(students);
  });
}

async function getStudentsByHouse(house) {
  return new Promise(async resolve => {
    const students = await StudentModel.find({ house });
    return resolve(students);
  })
}

module.exports = { getStudents, getStudentsByHouse };