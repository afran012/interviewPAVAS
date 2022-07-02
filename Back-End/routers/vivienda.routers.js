const express = require('express')
const router = express.Router()
const ViviendaController = require('../controllers/vivienda.controller')

router.get('/', ViviendaController.getVivienda)
router.get('/:id', ViviendaController.getViviendaById)
router.post('/new', ViviendaController.createVivienda)
router.delete('/delete/:id',ViviendaController.deleteVivienda)
router.put('/update/:id',ViviendaController.updateVivienda)

module.exports = router