import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER ;
const DB_PASSWORD = process.env.DB_PASSWORD ;
const DB_HOST = process.env.DB_HOST;

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false,
});

export default db;