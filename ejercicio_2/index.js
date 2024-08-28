const getAllProducts = require('./ejercicio_1');
const getProductsWithLimit = require('./ejercicio_2');
const { agregarProducto, productoNuevo } = require('./ejercicio_3');
const obtenerProducto = require('./ejercicio_4');
const eliminarProducto = require('./ejercicio_5');

// 1. Recuperar la información de todos los productos (products).
// getAllProducts();

// 2. Recuperar la información de un número limitado de productos (products).
// getProductsWithLimit();

// 3. Agregar un nuevo producto (product).
// agregarProducto(productoNuevo);
// 4. Retornar un producto (product) según un “id” como parámetro

// buscando producto que si existe
// obtenerProducto(9);

//manejo de error en caso de que producto con ese id no existe
// obtenerProducto(99);

// 5. Eliminar un producto (product).
// eliminando producto que si existe
// eliminarProducto(1);

//manejo de error en caso de que producto con ese id no existe
// eliminarProducto(99);
