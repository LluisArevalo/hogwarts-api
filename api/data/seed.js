require("dotenv").config();
require('./index.js');
const HouseModel = require('../models/Houses');
const StudentModel = require('../models/Students');
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const students = {
  Gryffindor: ['Harry Potter', 'Ron Weasley', 'Hermione Granger'],
  Slytherin: ['Draco Malfoy', 'Vincent Crabbe', 'Gregory Goyle', 'Pansy Parkinson'],
  Hufflepuff: ['Cedric Diggory', 'Hannah Abbot'],
  Ravenclaw: ['Luna Lovegood', 'Padma Patil', 'Cho Chang']
};

(async () => {
  try {
    await HouseModel.deleteMany({});
    await StudentModel.deleteMany({});
    console.log("Houses deleted correctly...");
  } catch (ex) {
    console.error("There has been an error deleting all the houses. Details:");
    console.error(ex);
  }

  try {
    houses.forEach(async (house) => {
      const createdHouse = await HouseModel.create({ name: house });
      console.log(`House ${house} created correctly!`);

      students[house].forEach(async student => {
        const studentData = { name: student, house: createdHouse };
        await StudentModel.create(studentData);
        console.log(`Student ${student} added correctly into ${house}!`);
      });
    });
  } catch (ex) {
    console.error("There has been an error creating Houses and Students. Details:");
    console.error(ex);
  }
})()
