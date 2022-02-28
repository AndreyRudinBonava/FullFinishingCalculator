// роли пользователей в системе ,может быть несколько, пока роль будет только одна
const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const user_role = sequelize.define('UserRoles', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING
    }
})

module.exports = user_role