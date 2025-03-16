const express = require('express')
const { signup, login } = require('../controllers/authController')

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)

const verifyToken = require('../controllers/auth'); // Import middleware

router.get('/protected-route', verifyToken, (req, res) => {
    res.json({ message: 'You have access!', user: req.user })
})


module.exports = router
