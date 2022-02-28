// (rooms)Тип комнаты по порядку внутри квартиры
const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const ordinal_room_type = sequelize.define('OrdinalRoomTypes', {
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
    //balcony 2
    eng_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //Балкон 2
    rus_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = ordinal_room_type