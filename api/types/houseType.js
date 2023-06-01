const { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require("graphql");
const { getStudentsByHouse } = require("../resolvers/students");
const StudentType = require("./studentType");

module.exports = new GraphQLObjectType({
  name: "House",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    points: { type: GraphQLInt },
    students: {
      type: new GraphQLList(StudentType),
      resolve(_) {
        return getStudentsByHouse(_.id)
      }
    }
  })
});