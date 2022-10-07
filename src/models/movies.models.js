const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Movies = db.define('movies', {

    id:{
        primaryKey:true,
        type:DataTypes.UUID,
        alowNull:false
    },

    name:{
        type:DataTypes.STRING(50),
        alowNull:false
    },

    genre:{
        type:DataTypes.STRING(15),
        alowNull:false
    },

    duration:{
        type:DataTypes.INTEGER,
        alowNull:false
    },

    releaseDate:{
        type:DataTypes.DATEONLY,
        alowNull:false,
        field:'release_date'
    }

})

module.exports = Movies