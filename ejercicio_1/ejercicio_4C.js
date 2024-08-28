// 4.C)Eliminar personajes con ID mayor a 25 y sobrescribir el archivo JSON(tronos.json)
const fs = require('fs');
function deleteCharactersById() {
  let data = JSON.parse(fs.readFileSync('tronos.json'));

  let filteredData = data.filter((character) => character.id <= 25);

  fs.writeFileSync('tronos.json', JSON.stringify(filteredData, null, 4));
  console.log('Personajes con id mayor a 25 eliminados.');
}

module.exports = deleteCharactersById;
