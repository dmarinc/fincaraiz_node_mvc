import express from 'express';
import { body } from 'express-validator';
import { admin, crear, guardar, agregaImagen, almacenarImagen, editar, guardarCambios, eliminar, cambiarEstado, mostrarPropiedad, enviarMensaje, verMensajes } from '../controller/propiedadController.js';
import protegerRuta from '../middleware/protegerRuta.js';
import upload from '../middleware/subirImagen.js';
import identificarUsuario from '../middleware/identificarUsuario.js';

const router = express.Router();

router.get('/mispropiedades', protegerRuta, admin);
router.get('/propiedades/crear', protegerRuta, crear);

router.post('/propiedades/crear', 
    protegerRuta, 
    body('titulo').notEmpty().withMessage('El Titulo del Anuncio es Obligatorio'),
    body('descripcion')
        .notEmpty().withMessage('La Descripción no puede ir vacia')
        .isLength({ max: 200 }).withMessage('La Descripción es muy larga'),
    body('categoria').isNumeric().withMessage('Selecciona una categoría'),
    body('precio').isNumeric().withMessage('Selecciona un rango de Precios'),
    body('habitaciones').isNumeric().withMessage('Selecciona la Cantidad de Habitaciones'),
    body('estacionamiento').isNumeric().withMessage('Selecciona la Cantidad de Estacionamientos'),
    body('wc').isNumeric().withMessage('Selecciona la Cantidad de Baños'),
    body('lat').notEmpty().withMessage('Ubica la Propiedad en el Mapa'),
    guardar
);

router.get('/propiedades/agregarImagen/:id', 
protegerRuta,
agregaImagen
);

router.post('/propiedades/agregarImagen/:id',
    protegerRuta,
    upload.single('imagen'),
    almacenarImagen
)

router.get('/propiedades/editar/:id', 
    protegerRuta,
    editar
)

router.post('/propiedades/editar/:id', 
    protegerRuta, 
    body('titulo').notEmpty().withMessage('El Titulo del Anuncio es Obligatorio'),
    body('descripcion')
        .notEmpty().withMessage('La Descripción no puede ir vacia')
        .isLength({ max: 200 }).withMessage('La Descripción es muy larga'),
    body('categoria').isNumeric().withMessage('Selecciona una categoría'),
    body('precio').isNumeric().withMessage('Selecciona un rango de Precios'),
    body('habitaciones').isNumeric().withMessage('Selecciona la Cantidad de Habitaciones'),
    body('estacionamiento').isNumeric().withMessage('Selecciona la Cantidad de Estacionamientos'),
    body('wc').isNumeric().withMessage('Selecciona la Cantidad de Baños'),
    body('lat').notEmpty().withMessage('Ubica la Propiedad en el Mapa'),
    guardarCambios
);

router.post('/propiedades/eliminar/:id', 
    protegerRuta,
    eliminar
)

//cambiar el estado de la propiedad
router.put('/propiedades/cambiarestado/:id', 
    protegerRuta,
    cambiarEstado
)

//Area Pública
router.get('/propiedad/:id', 
    identificarUsuario,
    mostrarPropiedad
)

// Almacenar los mensajes
router.post('/propiedad/:id',
    identificarUsuario,
    body('mensaje').isLength({min: 20}).withMessage('El Mensaje no puede ir vacio o es muy corto'),
    enviarMensaje
)

router.get('/mensajes/:id', 
    protegerRuta,
    verMensajes
)



export default router