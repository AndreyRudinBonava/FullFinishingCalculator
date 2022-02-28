// 3Корпусы(stait_case)
const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')
const queue = require('./queue')

const corpuse = sequelize.define('Corpuses', {
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
    },
    model_link: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

queue.hasMany(corpuse, { onDelete: "cascade" });

module.exports = corpuse