
app.use('/users', userRoutes)
sequelize.sync()
    .then(()=>{
        console.log('Database synced successfully')
        app.listen(3000, () => console.log('Server is running on port 3000'))
    })
    .catch((err) => console.error('Error syncing database:', err))