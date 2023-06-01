# Hogwarts API

Small project to show how GraphQL works using as example Hogwarts.

The project uses the House-Student relation to show how easy becomes to join different MongoDB collections from the client thanks to GraphQL.

It also provides a mutation to add or substract points to a specific house, to make Hogwarts teacher's lifes easier.

## Steps

- Create a `.env` file with the content described in the section below, adding the correct PORT and DDBB connection string.
- Execute the seed by running the command `yarn db:seed`.
- Start the project with either `yarn start` or `yarn dev`.
- Go to `http://locahost:${PORT}/graphql` to view GraphiQL and be able to execute your queries.

## .env file

Find below the .env file sample:

```
PORT=
DATABASE_URL=
```

The information in the fields is the following:

- PORT: Port that will be used to run the project locally.
- DATABASE_URL: Connection string to allow use an external database, either from local or in the Cloud.

## Scripts

The project contains three scripts to make its usage easier:

- `db:seed`: Inserts some default data in the database to start playing around with data. You can update the information by changing the content that you will find in `data/seed.js`.
- `dev`: Will run `nodemon` to start the project in a DEV environment, auto-reloading the server with every change you do.
- `start`: Will execute the project in a PROD environment.

## Technologies

- Node.js
- Express
- GraphQL
- MongoDB
- Mongoose
- Yarn