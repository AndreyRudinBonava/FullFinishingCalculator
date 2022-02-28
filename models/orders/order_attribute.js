// атрибуты выбранные в заявке
const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const order_attribute = sequelize.define('OrderAttributes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    order_id: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    attribute_id: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    room_id: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    accent: {
        allowNull: false,
        type: Sequelize.BOOLEAN
    }
})

module.exports = order_attribute