const {DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const User = sequelize.define('User',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name :{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
module.exports = User