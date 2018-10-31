const executeQuery = require('../db/perform-query');


class Street {
    constructor(name) {
        this.name = name;
    }

    static async init(name) {
        const exists = await executeQuery(`SELECT existe_calle(?) AS result`, name);
        if (!exists) {
            throw new Error('street does not exists');
        }

        return new Street(name);
    }

    async streetNumber(number) {
        const coords = await executeQuery(
            'SELECT st_astext(altura_direccion_calle(?, ?)) AS result',
            this.name,
            number
        );
        if (!coords) {
            throw new Error('street number does not exists');
        }

        return coords;
    }
}

async function streetFactory(streetName) {
    try {
        const street = await Street.init(streetName);
        return street;
    } catch (error) {
        throw error;
    }
}

module.exports = streetFactory;
