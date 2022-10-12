const { restart } = require('nodemon')

//!Importando los controladores//
const moviesControllers = require ('./movies.controller')


//!Servicio para obtener el parametro//
const getAllMovies = (req, res) => {
    moviesControllers.getAllMovies()
    .then( data => {
        res.status(200).json(data)
    })

    .catch(err => {
        res.status(400).json({message:err.message})
    })
}

//!para crear una pelicula nueva
const postMovie = (req, res) => {
    const data = req.body
    if(data.name && data.genre && data.duration && data.releaseDate){
        moviesControllers.createMovie(data)
        .then( response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({message:err.message})
        })
    }else{
        res.status(400).json({message:'Missin data'})
    }
};

//!Para obtener pasado por parametro//
const getMovieById = (req, res) => {
    const id=req.params.id;

    moviesControllers.getMovieById(id)

    .then(data => {
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json({message:'Invalid ID'})
        }
    })
    .catch(err => {
        res.status(404).json({message:err})
    })
}

//!Servicio de UPDATE parcial//
const patchMovie = (req, res) => {
    const id = req.params.id
    const {name, genre, duration, releaseDate} = req.body;
    moviesControllers.editMovie(id, {name, genre, duration, releaseDate})
    .then(response =>{
        res.status(200).json({
           message:`Movie whit id: ${id}, edited succesfully` 
        })
    })
    .catch(error => {
        res.status(400).json({message:error.message})
    })
}

module.exports = {
    getAllMovies,
    getMovieById,
    postMovie,
    patchMovie

}


