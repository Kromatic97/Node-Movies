const { restart } = require('nodemon')
const moviesControllers = require ('./movies.controller')


//!Servicio para obtener el parametro//
const getAllMovies = (req, res) => {
    moviesControllers.getAllMovies()
    .then((data) => {
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
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({message:err.message})
        })
    }else{
        res.status(400).json({message:'Missin data'})
    }
};

const getMovieById = (req, res) => {
    const id=req.params.id;
    moviesControllers.getMovieById(id)
    .then(data =>{
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(404).json({message:err})
    })
}

