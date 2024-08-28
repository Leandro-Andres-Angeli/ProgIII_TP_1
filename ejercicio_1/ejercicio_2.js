/* Ejercicio 1
Thrones API (https://thronesapi.com/) es una API REST que proporciona acceso a datos
relacionados con el universo de la serie de televisión Game of Thrones y las novelas de Canción de
Hielo y Fuego de George R. R. Martin. Utilizando Thrones API se requiere: */
// 2. Realizar una función que permita recuperar todos los personajes disponibles.
const fetchApi = require('../utils/fetchApi');
const formatMessage = require('../utils/formatMessage');
const getAllCharacters = async () => {
  console.info(
    formatMessage('recuperando la información todos los personajes disponibles')
  );
  await fetchApi('https://thronesapi.com/api/v2/Characters');
};
module.exports = getAllCharacters;
