const Sequelize = require('sequelize');
const sequelize = Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

module.exports = sequelize;