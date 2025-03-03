const {Sequelize } = require('sequelize')
const sequelize = new Sequelize('expense_app','root','@Ambika7914',{
     host: 'localhost',
     dialect: 'mysql'
})
module.exports = sequelize