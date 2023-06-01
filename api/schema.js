const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString
} = require('graphql');
const HouseType = require('./types/houseType');
const StudentType = require('./types/studentType');
const { getHouses, addPointsToHouse } = require("./resolvers/houses");
const { getStudents } = require("./resolvers/students");

const Queries = new GraphQLObjectType({
  name: "Queries",
  description: "These are the different queries you can execute.",
  fields: {
    houses: {
      type: new GraphQLList(HouseType),
      resolve() {
        return getHouses()
      }
    },
    students: {
      type: new GraphQLList(StudentType),
      resolve() {
        return getStudents()
      }
    }
  }
});

const Mutations = new GraphQLObjectType({
  name: "Mutations",
  description: "These are the different mutations you can execute.",
  fields: {
    addPointsToHouse: {
      type: HouseType,
      args: {
        points: {
          type: GraphQLInt,
          description: "Amount of points to add/substract to a specific house"
        },
        house: {
          type: GraphQLString,
          description: "Name of the house which punctuation will be modified"
        }
      },
      resolve(_, args) {
        return addPointsToHouse(args.house, args.points);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Queries,
  mutation: Mutations
});
