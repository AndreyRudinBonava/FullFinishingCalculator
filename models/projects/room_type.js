// (rooms_types) Типы комнат общие
const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const room_type = sequelize.define('RoomTypes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    //balcony
    eng_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //Балкон
    rus_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = room_type