// ruta api/todo/:busqueda

const { Router } = require('express');

const { validarJWT } = require('../middlewares/validar-jwt');
const {
    getTodos,
    getDocumentosColeccion
} = require('../controllers/busquedas');
const router = Router();

router.get('/:busqueda', validarJWT, getTodos);
router.get('/coleccion/:tabla/:busqueda', validarJWT, getDocumentosColeccion);
module.exports = router;