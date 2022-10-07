const router = require ('express').Router()

//? Este es el prefijo /api/v1/movies

router.get ('/')
router.post ('/')

router.get('/:id')
router.delete('/:id')
router.patch('/:id')
router.put('/:id')

module.exports = router