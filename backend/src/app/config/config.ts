// * Environment variables
import 'dotenv/config';

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 8080;

const server = {
  PORT: SERVER_PORT,
  HOSTNAME: SERVER_HOSTNAME,
};

const db = {
  host: 'db', // the database server
  port: 5432, // the database port
  database: process.env.POSTGRES_DB, // the database name
  user: process.env.POSTGRES_USER, // the user account to connect with
  password: process.env.POSTGRES_PASSWORD, // the password of the user account
};

const config = {
  server,
  db
};

export default config;