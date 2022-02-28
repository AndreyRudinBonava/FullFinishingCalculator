// заявки
const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const order = sequelize.define('Orders', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    user_id: {
        allowNull: false,
        type: Sequelize.STRING
    },
    manager_id: {
        allowNull: false,
        type: Sequelize.STRING
    },
    package_id: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    style_id: {
        type: Sequelize.INTEGER
    },
    unit_id: {
        allowNull: false,
        type: Sequelize.STRING
    },
    version: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    status: {
        allowNull: false,
        type: Sequelize.INTEGER
    }
})

module.exports = order