// пользователи системы
const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const user = sequelize.define('Users', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    role_id: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    first_name: {
        allowNull: false,
        type: Sequelize.STRING
    },
    second_name: {
        allowNull: false,
        type: Sequelize.STRING
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING
    },
    phone: {
        allowNull: false,
        type: Sequelize.STRING
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING
    }
})

module.exports = user