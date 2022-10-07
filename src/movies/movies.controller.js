
const uuid = require ('uuid')

//TODO 1ero importa el modelo de la BD
const Movies = require ('../models/movies.models') 


//!FUNCION PARA TRAER TODOS LOS DATOS
const getAllMovies = async () => {
    const data = await Movies.findAll()
    return data
}

//!CONTROLLADOR PARA MOSTRAR LOS DATOS//
getAllMovies()
.then((response) => console.log(response))
.catch((err) => console.log(err))

//?FUNCION PARA INSERTAR LOS DATOS//
const createMovie = async (data) => {
    const newMovie = await Movies.create({
        id:uuid.v4(),
        name:data.name,
        genre:data.genre,
        duration:data.duration,
        releaseDate:data.releaseDate
    })
    return newMovie
}

createMovie ({
name:'Dracula',
genre:'Action',
duration:'120',
releaseDate:'2015/05/23'
})
.then((response) => console.log(response))
.catch((err) => console.log(err))

//!CONSULTA POR ID//
const getMovieById =  async (id) => {
    const data = await Movies.findOne({
        where: {
            id: id,
           
        },
    });
return data
}

getMovieById('58eeec50-e687-468a-9e60-bc0081c332a0')
.then((response) => console.log(response))
.catch((err) => console.log(err))

//!MODIFICAR//
