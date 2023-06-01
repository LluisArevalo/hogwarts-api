const HouseModel = require("../models/Houses");

async function getHouses() {
  return new Promise(async resolve => {
    const houses = await HouseModel.find({});
    return resolve(houses);
  })
}

async function getHouseName(houseId) {
  return new Promise(async resolve => {
    try {
      const house = await HouseModel.findById({ _id: houseId });
      return resolve(house.name);
    } catch (ex) {
      console.error(ex);
    }
  });
}

async function addPointsToHouse(house, points) {
  return new Promise(async resolve => {
    try {
      const foundHouse = await HouseModel.findOne({ name: house });
      foundHouse.points += points;
      foundHouse.save();
      return resolve(foundHouse);
    } catch (ex) {
      console.error(`Something went wrong adding ${points} points to ${house}.`);
    }
  });
}

module.exports = { getHouses, getHouseName, addPointsToHouse };