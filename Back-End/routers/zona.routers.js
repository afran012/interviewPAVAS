const express = require('express')
const router = express.Router()
const zonaController = require('../controllers/zona.controller')

router.get('/', zonaController.getZona)
router.get('/:id', zonaController.getZonaById)
router.post('/new', zonaController.createZona)
router.delete('/delete/:id',zonaController.deleteZona)
router.put('/update/:id',zonaController.updateZona)

module.exports = router