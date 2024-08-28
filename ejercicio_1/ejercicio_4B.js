// 4.B)Agregar un nuevo personaje y sobrescribir el archivo JSON (tronos.json)
const fs = require('fs');
function addNewCharacter() {
  const data = JSON.parse(fs.readFileSync('tronos.json'));

  const newCharacter = {
    id: data.length + 1,
    firstName: 'Pepe',
    lastName: 'Argento',
    fullName: 'Pepe Argento',
    title: 'Lord Pepe',
    family: 'Argento',
    image: 'https://example.com/image.jpg',
    imageUrl: 'https://example.com/image.jpg',
  };

  data.push(newCharacter);

  fs.writeFileSync('tronos.json', JSON.stringify(data, null, 4));
  console.log('Nuevo personaje agregado');
}

module.exports = addNewCharacter;
