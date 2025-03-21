const {DataTypes} = require("sequelize")
const sequelize = require('../config/database')
const user = require('./User')

const Expense = sequelize.define('Expense',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amount:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:user,
            key:"id",
        },
    }
})
module.exports = Expense