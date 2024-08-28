//Recuperar la información de todos los productos (products).

const urlApi = 'https://fakestoreapi.com/products';
const getAllProducts = () => {
  fetch(urlApi)
    .then((response) => {
      if (!response.ok) {
        throw Error('Error ' + response.status);
      }
      return response.json();
    })
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
module.exports = getAllProducts;
