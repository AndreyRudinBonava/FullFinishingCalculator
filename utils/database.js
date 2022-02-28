const Sequelize = require('sequelize')

const DB_NAME = 'full-finishing'
const USER_NAME = 'root'
const PASSWORD = '1234567'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    // port: '1433'
})

module.exports = sequelize