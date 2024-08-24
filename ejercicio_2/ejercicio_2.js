//Recuperar la información de un número limitado de productos (products).

const urlApi = 'https://fakestoreapi.com/products?limit=10';

fetch(urlApi)
  .then((response) => {
    if (!response.ok) {
      throw Error('Error', response.status);
    }
    return response.json();
  })
  .then((datos) => {
    console.log(datos);
  })
  .catch((error) => {
    console.log(error);
  });
