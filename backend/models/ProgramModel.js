import { Sequelize, DataTypes } from "sequelize";
import con from "./config/database.js"

const MProgram = con.define('MPROGRAM', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});