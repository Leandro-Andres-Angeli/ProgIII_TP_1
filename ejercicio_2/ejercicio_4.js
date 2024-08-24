//Retornar un producto (product) según un “id” como parámetro.

const urlApi = 'https://fakestoreapi.com/products';

async function agregarProducto(id) {
  try {
    const response = await fetch(urlApi + '/' + id);

    if (response.status !== 200) {
      throw new Error(`Error ${response.status} ${response.statusText}`);
    }

    const datos = await response.json();
    console.log(datos);
  } catch (error) {
    console.log(error.message);
  }
}
agregarProducto(5);
