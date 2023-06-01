require("dotenv").config();
require("./api/data");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require('./api/schema');

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(process.env.PORT, () => {
  console.log(`🚀 graphQL server with Express running on port ${process.env.PORT}`);
});