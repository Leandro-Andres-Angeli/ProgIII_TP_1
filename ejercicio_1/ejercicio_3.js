const fetchApi = require('../utils/fetchApi');
const formatMessage = require('../utils/formatMessage');
const fs = require('fs');

const saveDataToFile = (data, filename) => {
  fs.writeFileSync(filename, JSON.stringify(data, null, 4));
  console.info(formatMessage(`Datos guardados en ${filename}`));
};

const main = async () => {
  console.info(
    formatMessage(
      'Recuperando la información de todos los personajes disponibles'
    )
  );

  try {
    //2)Realizar una función que permita recuperar todos los personajes disponibles.
    const characters = await fetchApi(
      'https://thronesapi.com/api/v2/Characters'
    );

    //3)Persistir el resultado en un archivo JSON
    saveDataToFile(characters, 'tronos.json');
  } catch (error) {
    console.error('Error:', error);
  }
};

main();
