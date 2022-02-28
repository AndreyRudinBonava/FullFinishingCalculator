//Картинки визуализации для каждого типа помещения с каждым вариантом отделки
const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const room_image = sequelize.define('RoomImages', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    type_room_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    attribute_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    attribute_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    image_path: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = room_image