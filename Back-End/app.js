// Main libraries
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const PORT = 4000
const cors = require('cors')
const sequelize = require('./db_connection_data')

// Routes
const viviendaRoutes = require('./routers/vivienda.routers')
const tipoViviendaRoutes = require('./routers/tipovivienda.routers')
const zonaRoutes = require('./routers/zona.routers')

// Using Middlewares
const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())

// Using Routes
app.use('/api/v1/vivienda', viviendaRoutes)
app.use('/api/v1/tipovivienda', tipoViviendaRoutes)
app.use('/api/v1/zona', zonaRoutes)

//Server
app.listen(PORT, ()=>{
    console.log(`Server started in the ${PORT}`);
 })

 exports.app = app