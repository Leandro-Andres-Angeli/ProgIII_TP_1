/* Ejercicio 1
Thrones API (https://thronesapi.com/) es una API REST que proporciona acceso a datos
relacionados con el universo de la serie de televisión Game of Thrones y las novelas de Canción de
Hielo y Fuego de George R. R. Martin. Utilizando Thrones API se requiere: */
// 1. Realizar una función que permita recuperar la información del personaje “Ned Stark”
const fetchApi = require("../utils/fetchApi")
const formatMessage = require("../utils/formatMessage")
console.info(formatMessage('recuperando la información del personaje “Ned Stark”'))
fetchApi('https://thronesapi.com/api/v2/Characters/6')