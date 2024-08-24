//Retornar un producto (product) según un “id” como parámetro.

const urlApi = 'https://fakestoreapi.com/products';

async function agregarProducto(id) {
  try {
    const response = await fetch(urlApi + '/' + id);

    if (!response.ok) {
      throw new Error('error', response.status);
    }

    const datos = await response.json();
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
}
agregarProducto(5);
