const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.signup = async (req, res) => {
    try {
        const { name, username, email, password } = req.body
        console.log(name,username,email,password)

        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' })
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await User.create({ name, username, email, password: hashedPassword })

        res.status(201).json({ message: 'User registered successfully!', user: newUser })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Server error' })
    }
};

// Login Controller
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        // Check if user exists
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return res.status(400).json({ message: 'User not found' })
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        res.status(200).json({ message: 'Login successful!', user })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Server error' })
    }
}
