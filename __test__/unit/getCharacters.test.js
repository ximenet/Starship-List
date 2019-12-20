jest.mock('axios', () => ({
    get: jest.fn(() => 
        Promise.resolve({
            data: {
                results: [
                    { name: "Executor", model: "Executor-class star dreadnought" },
                    { name: "Sentinel-class landing craft", model: "Sentinel-class landing craft" },
                    { name: "Death Star", model: "DS-1 Orbital Battle Station" }
                ]
            }
        })
    )
}));

describe('getCharacters', () => {


    it('deberia mostrar personajes', async done => {
        const result = await getCharacters();

        expect(Array.isArray(result)).toBeTruthy();
        expect(result).toHaveLength(3);

        expect(axios.get).toHaveBeenCalledTimes(1);
        done();
    });
});