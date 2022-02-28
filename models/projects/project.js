// 1Проекты(investment)
const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const project = sequelize.define('Projects', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    short_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = project