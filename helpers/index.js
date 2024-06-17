//toma el usuario que esta autenticado y el usuario que creo la propiedad.
const esVendedor = (usuarioId, propiedadUsuarioId) => {
    return usuarioId === propiedadUsuarioId  //si esto es igual, indica que es el vendedor
}

const formatearFecha = fecha => {
    /*cambia formato a string y para poder recortar la fecha del
    formtao de sequelize para darle formato de fecha, tamaño de 10*/
    const nuevaFecha = new Date(fecha).toISOString().slice(0, 10)  

    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
    }

    //convierte el formato de fecha de string a fecha y se le da el formato en español,
    //ejemplo 2024-11-02 a martes 2 noviembre de 2024
    return new Date(nuevaFecha).toLocaleDateString('es-ES', opciones)
    
}
export {
    esVendedor,
    formatearFecha
}