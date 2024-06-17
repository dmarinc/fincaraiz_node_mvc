import { Propiedad, Precio, Categoria } from '../models/index.js'

const propiedades = async (req, res) => {

    //consultar todas las propiedades que se van a mostrar en el mapa
    const propiedades = await Propiedad.findAll({
        include: [
            {model: Precio, as: 'precio'},
            {model: Categoria, as: 'categoria'},
        ]
    })


    res.json(propiedades)
}

export {
    propiedades
}