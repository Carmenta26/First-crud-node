const ProductoDao = require('./dataAccess/productDAO');
const Product = require('./models/product');
const db = require('./config/bd');










// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');


  // Ejemplo de inserción de un producto
  const newProduct = new Product(null, 'Producto de ejemplo', 19.99, 'Descripción del producto');


  ProductoDao.insertProduct(newProduct, (err, result) => {
    if (err) {
      console.error('Error al insertar el producto:', err);
    } else {
      console.log('Producto insertado con éxito.');
    }
  });

/*
// Ejemplo de selección de todos los productos
(agrega el código correspondiente)
// Ejemplo de actualización de un producto
(agrega el código correspondiente)
// Ejemplo de eliminación de un producto por su ID
(agrega el código correspondiente)
*/
    // Cierra la conexión cuando hayas terminado
    db.end((err) => {
      if (err) {
        console.error('Error al desconectar de la base de datos:', err);
      } else {
        console.log('Desconexión exitosa de la base de datos.');
      }
    });
  });








      

