const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const style = sequelize.define('Styles', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    package_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image_path: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = style