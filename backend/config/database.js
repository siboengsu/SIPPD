import { Sequelize } from "sequelize";

const con = new Sequelize('SIPPD', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default con;