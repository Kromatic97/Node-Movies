const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/initModels')
//!se importa de la pagina config.js
const config = require('./config')

const app = express()

//!autenticacion con la base de datos sin son correctas//
db.authenticate()
    .then(() => console.log('DB Authentication Succesfully') )
    .catch((err) => console.log(err))

//!sincronizacion con la base de datos, creando las tablas//
db.sync()
.then(() => console.log('Database synced'))
.catch((err) => console.log(err))

initModels()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message:'OK!'})
})


app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})

