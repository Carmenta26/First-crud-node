const db = require('./config/bd');


class ProductoDao {
    constructor() { }


    // Insertar un nuevo producto (grave acento) ALT 96
    insertProduct(product, callback) {
        const insertQuery = `INSERT INTO productos (nombre, precio, descripcion) VALUES ('${product.name}', ${product.price}, '${product.description}')`;


        db.query(insertQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {    
                callback(null, result);
            }
        });
    }
    // Seleccionar todos los productos (agrega el código correspondiente)
    // Actualizar un producto (agrega el código correspondiente)
    // Eliminar un producto por su ID (agrega el código correspondiente)
}
module.exports = new ProductoDao();

