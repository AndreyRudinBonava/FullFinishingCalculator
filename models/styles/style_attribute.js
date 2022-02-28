// атрибуты которые присущи каждому стилю
const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const style_attribute = sequelize.define('StyleAttributes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    style_id: {
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
    }
})

module.exports = style_attribute