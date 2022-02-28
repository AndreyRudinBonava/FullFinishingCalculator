// 2Очереди(этапы для GL) - в старом приложении таблица называется projects
const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')
const project = require('./project')

const queue = sequelize.define('Queues', {
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

project.hasMany(queue, { onDelete: "cascade" });

module.exports = queue