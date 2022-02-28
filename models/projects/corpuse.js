// 3Корпусы(stait_case)
const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const corpuse = sequelize.define('Corpuses', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    queue_id: {
        type: Sequelize.INTEGER,
        allowNull: false
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

module.exports = corpuse