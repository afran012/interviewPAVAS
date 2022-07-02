const express = require('express')
const router = express.Router()
const TipoViviendaController = require('../controllers/tipovivienda.controller')

router.get('/', TipoViviendaController.getTipoVivienda)
router.get('/:id', TipoViviendaController.getTipoViviendaById)
router.post('/new', TipoViviendaController.createTipoVivienda)
router.delete('/delete/:id',TipoViviendaController.deleteTipoVivienda)
router.put('/update/:id',TipoViviendaController.updateTipoVivienda)

module.exports = router