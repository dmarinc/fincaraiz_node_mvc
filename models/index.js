import Propiedad from './Propiedad.js'
import Precio from './Precio.js'
import Categoria from './Categoria.js'
import Usuario from './Usuario.js'
import Mensaje from './Mensaje.js'

Propiedad.belongsTo(Precio, { foreignKey: 'precioId'})
Propiedad.belongsTo(Categoria, { foreignKey: 'categoriaId'})
Propiedad.belongsTo(Usuario, { foreignKey: 'usuarioId'})
Propiedad.hasMany(Mensaje, { foreignKey: 'propiedadId'} )  //relacionar la propiedad con el mensaje

Mensaje.belongsTo(Propiedad, { foreignKey: 'propiedadId'}) //relacionar el mensaje con la propiedad
Mensaje.belongsTo(Usuario, { foreignKey: 'usuarioId'}) // relacionando el mensaje con el usuario

export {
    Propiedad,
    Precio,
    Categoria,
    Usuario, 
    Mensaje
}