// Комнаты в квартирах
const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const room = sequelize.define('Rooms', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    unit_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ordinal_room_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    area: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = room