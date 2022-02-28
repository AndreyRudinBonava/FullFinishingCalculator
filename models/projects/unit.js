const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')
const corpuse = require('./corpuse')

const unit = sequelize.define('Units', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
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
        // allowNull: false
    },
    bedrooms_number: {
        type: Sequelize.INTEGER,
        // allowNull: false
    },
    floor: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        // allowNull: false
    },
    discount_price: {
        type: Sequelize.INTEGER,
        // allowNull: false
    },
    meter_price: {
        type: Sequelize.INTEGER,
        // allowNull: false
    },
    discount_meter_price: {
        type: Sequelize.INTEGER,
        // allowNull: false
    },
    bona_lvu_revit_id: {
        type: Sequelize.INTEGER,
        // allowNull: false
    },
    model_link: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        // allowNull: false
    }
})

corpuse.hasMany(unit, { onDelete: "cascade" });

module.exports = unit