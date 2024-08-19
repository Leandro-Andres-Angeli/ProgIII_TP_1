// 4.A)Mostrar los personajes de la familia Stark
function showStarkCharacters() {
    const data = JSON.parse(fs.readFileSync('tronos.json'));

    console.log('Personajes de la familia Stark:');
    data.forEach(character => {
        if (character.family === 'House Stark') {
            console.log(character.fullName);
        }
    });
}



showStarkCharacters();
