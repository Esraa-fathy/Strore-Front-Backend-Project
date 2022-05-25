# Store_front_Backend project

A Store online API written in NodeJS for Udacity. This application has APIs for Users, Products, and Orders.
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.
### Prerequisites

You need the following modules and dependencies installed to run this project:

```bash
node          # To run the server
npm              # For dependency
```
### Installing

Simply, run the following command to install the project dependencies:

```bash
npm
```
### Setup environment

First, create a `.env` file with all the required environment variables:

```bash
# .env
NODE_ENV=dev
# Sensetive database info
HOST= "127.0.0.1"
port=4000
DB_PORT=5432
db_pg=store_info
TEST_DB=store_test
USERName_DB=postgres
passward_DB=postgres
BCRYPT_PASSWORD=My-bcrypt-password255
SALT_ROUNDS=10
TOKEN=My-secretToken-esraa125
```

Next, start the Postgres server:

```bash
npm run start
```

Now, create the database


```bash


# Postgres shell
create database  store_info; 
create database  store_test;

```

Next, you need to run the database migrations:

```bash
db-migrate up
```
## Running the application

Use the following command to run the application in using node:

```bash
npm run start
```

The application will run on <http://localhost:4000/>.
## Running the unit tests

Use the following command to run the unit tests:

```bash
npm run test
```

You may also use the Postman collection present in the repository for testing.
## Built With

- [NodeJS](https://nodejs.org/) - The JavaScript runtime
- [npm](https://npm.com/) - The dependency manager
- [db-migrate](https://db-migrate.readthedocs.io/en/latest/) - The database migration tool
- [Express](https://expressjs.com) - The web framework
- [TypeScript](https://www.typescriptlang.org/) - Types JS extension
- [Jasmine](https://jasmine.github.io/) - The unit testing framework
## Endpoints

- See [REQUIREMENTS.md](./REQUIREMENTS.md) file


## Database Schema

 - See [REQUIREMENTS.md](./REQUIREMENTS.md) file
