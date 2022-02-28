// возможное значение для 
const Sequelize = require('sequelize')
const sequelize = require('../../utils/database')

const attribute = sequelize.define('Attributes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    type_attribute_id: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    revti_type_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //Путь к картинке с текстурой типоразмера
    image_path: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = attribute