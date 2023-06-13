import express from "express";
import con from "./config/database.js";
const app = express()
const port = 3000

try {
    await con.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

