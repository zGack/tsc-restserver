import { Sequelize } from 'sequelize'

const db = new Sequelize('node','menaf','99018',{
  host: 'localhost',
  dialect: 'mysql',
  // logging: false 
});

export default db;
