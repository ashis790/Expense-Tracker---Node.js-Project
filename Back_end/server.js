const express = require('express')
const sequelize = require('./config/database')
const User = require('./models/User')
const userRoutes = require('./routes/auth')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/users', userRoutes)
sequelize.sync({ force: false })
    .then(()=>{
        console.log('Database synced successfully')
        app.listen(3000, () => console.log('Server is running on port 3000'))
    })
    .catch((err) => console.error('Error syncing database:', err))