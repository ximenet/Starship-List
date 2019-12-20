const filterCharacters = (characters, filter) => {
    const result = characters

    .filter(character => {
        return character[filter.name] == filter.value;
    }).map(character => {
        return {
            name: character.name,
            [filter.name]: filter.value
        }
    });

    return result;
};

module.exports = filterCharacters;
