const express = require('express');

//para pasar la ruta a una variable
const router = express.Router(); 

//Importar controlador
const instrumentoController = require('../controllers/instrumentoController');

//Rutas
// List
router.get('/', instrumentoController.list);
// Create
router.post('/', instrumentoController.create);
// Show
router.get('/:id', instrumentoController.show);
//Update
router.put('/:id', instrumentoController.update);
router.post('/:id', instrumentoController.update);
//Delete
router.delete('/:id', instrumentoController.delete);

router.get('/testdata',instrumentoController.testdata );

//Exportar router -> igual a: export.default
module.exports = router;