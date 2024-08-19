// 4.C)Eliminar personajes con ID mayor a 25 y sobrescribir el archivo JSON(tronos.json)
function deleteCharactersById() {
    let data = JSON.parse(fs.readFileSync('thrones_data.json'));

    data = data.filter(character => character.id <= 25);

    fs.writeFileSync('thrones_data.json', JSON.stringify(data, null, 4));
    console.log('Personajes con id mayor a 25 eliminadoso.');
}


deleteCharactersById();