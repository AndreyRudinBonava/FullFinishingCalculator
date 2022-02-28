const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const attribute_type = sequelize.define('AttributeTypes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    room_type_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //bona_fc_floor_bath
    eng_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //Плитка пола в ванной
    rus_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = attribute_type