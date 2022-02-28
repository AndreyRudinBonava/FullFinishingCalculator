const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const unit = sequelize.define('Units', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    corpuse_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    area: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    area_without_balcony: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    bedrooms_number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    floor: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    discount_price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    meter_price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    discount_meter_price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bona_lvu_revit_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    model_link: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = unit