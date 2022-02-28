const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const package = sequelize.define('Packages', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    project_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    image_path: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = package