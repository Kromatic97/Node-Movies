
//?1ero importa el modelo de la BD
const Movies = require ('../models/movies.models')

//?importar uuid
const uuid = require ('uuid')

//!FUNCION PARA TRAER TODOS LOS DATOS
const getAllMovies = async () => {
    const data = await Movies.findAll()
    return data
}

//!CONTROLLADOR PARA RESOLVER LA PROMESA QUE SE EJECUTE 1 VEZ NADA MAS//
// getAllMovies()
// .then((response) => console.log(response))
// .catch((err) => console.log(err))


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

// createMovie ({
// name:'Dracula',
// genre:'Action',
// duration:120,
// releaseDate:'2015/05/23'
// })
// .then((response) => console.log(response))
// .catch((err) => console.log(err))



//!CONSULTA POR ID//
const getMovieById =  async (id) => {
    const data = await Movies.findOne({
        where: {
            id: id,
           
        },
    });
return data
}

// getMovieById('5877d728-265d-4608-9f1b-88003c1f93a5')
// .then((response) => console.log(response))
// .catch((err) => console.log(err))

//!UPDate movies//
const editMovie = async (id, data) => {
    const response = await Movies.update(data, {
        where: {
            id: id
        },
    })
    return response
}

//?prueba de edit de Movie//
// editMovie('a4ccf8b9-2800-4f69-8422-65b5f8d6aa0f', {
//     name:'El vampiro',
//     duration:150
// }).then((response) => {
//     console.log(response);
// })
// .catch ((err) => {
//     console.log(err)
// });

//!DELETE movies//
const deleteMovie = async (id) => {
    const data = await Movies.destroy({
        where: {
            id:id
        }
    })
    return data
}

//?Exportando los metodos y funciones//

module.exports={
    getAllMovies,
    getMovieById,
    createMovie,
    editMovie,
    deleteMovie
}