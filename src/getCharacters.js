const axios = require('axios');

const getCharacters = async function (req, res) {
    const respuesta = await axios.get('https://swapi.co/api/starships/?page=1');
    const { results } = respuesta.data;
    return results;
}

module.exports = getCharacters;
