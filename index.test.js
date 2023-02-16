const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */

    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
        
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const newBand = await Band.create({
            name: "campRock",
            genre: "classical"
        });
        expect(newBand.name).toBe('campRock');
        expect(newBand.genre).toBe('classical');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const newMusician = await Musician.create({
            name: "soliana tesema",
            instrument: "piano"
        });
        expect(newMusician.name).toBe('soliana tesema');
        expect(newMusician.instrument).toBe('piano');
    })
})