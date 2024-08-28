//Retornar un producto (product) según un “id” como parámetro.

const urlApi = 'https://fakestoreapi.com/products';

async function obtenerProducto(id) {
  try {
    const response = await fetch(urlApi + '/' + id);

    if (response.status !== 200) {
      throw new Error(`Error ${response.status} ${response.statusText}`);
    }

    let datos;
    try {
      datos = await response.json();
      console.log(datos);
    } catch (err) {
      throw Error('Producto no encontrado');
    }
  } catch (error) {
    console.log(error.message);
  }
}
module.exports = obtenerProducto;
