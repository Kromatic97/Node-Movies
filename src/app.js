const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/initModels')
//!se importa del archivo config.js
const config = require('./config')
const moviesRouter = require ('./movies/movies.router')

const app = express()

//!autenticacion con la base de datos sin son correctas//
db.authenticate()
    .then(() => console.log('DB Authentication Succesfully') )
    .catch((err) => console.log(err))

// //!sincronizacion con la base de datos, creando las tablas//
db.sync()
.then(() => console.log('Database synced'))
.catch((err) => console.log(err))


initModels()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message:'OK!'})
})

//!Utilizamos los metodos de la importacion de los servicios creadas en 
//!la raiz
app.use('/movies', moviesRouter)
//!aqui se aplica el metodo port del archivo
//!config.js config.port
app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})

