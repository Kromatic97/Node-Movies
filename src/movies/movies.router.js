const router = require ('express').Router()
const moviesServices = require ('./movies.services')

//? Este es el prefijo /api/v1/movies

router.get ('/', moviesServices.getAllMovies)
router.post ('/', moviesServices.postMovie)

router.get('/:id', moviesServices.getMovieById)
// router.delete('/:id')
router.patch('/:id', moviesServices.patchMovie)
// router.put('/:id')

module.exports = router