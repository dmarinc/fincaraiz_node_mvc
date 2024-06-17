import express from 'express';
import {inicio, categoria, noEncontrado, buscador} from '../controller/appController.js';

const router = express.Router();

//pagina de Inicio

router.get('/', inicio);

//categorias
router.get('/categoria/:id', categoria);

//pagina 404
router.get('/404', noEncontrado);

//Buscador
router.post('/buscador', buscador);


export default router;