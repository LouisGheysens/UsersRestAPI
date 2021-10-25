//Sequelize inmorteren!
const sequelize = require('../config/db');
//Import datatypes van sql zodat je een INT, VARCHAR enzo kan gebruiken om de tabel aan te maken
const { DataTypes } = require('sequelize');

//Maak een tabel User aan!
const User = sequelize.define('user', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
});
(async () => { await sequelize.sync({ force: true});})();

module.exports = User;