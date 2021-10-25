//Maak een sequelize object aan!
const { Sequelize } = require('sequelize');

//Informatie meegeven van databank
const sequelize = new Sequelize(process.env.DB, 'root', 'randomly', {
    host: process.env.HOST,
    dialect : 'mysql'
});



//Exporteer zodat je daar gebruik van kan maken!
module.exports = sequelize;