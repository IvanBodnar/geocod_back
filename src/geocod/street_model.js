const sequelize = require('../db/connection');
const executeQuery = require('../db/queries');


class Street {
    constructor(name) {
        this.name = name;
    }

    static async init(name) {
        const exists = await executeQuery(`SELECT existe_calle(?)`, name);
        if (!exists) {
            throw new Error('Street does not exists.');
        }

        return new Street(name);
    }

    async streetNumber(number) {
        const coords = await executeQuery(
            'select st_astext(altura_direccion_calle(?, ?))',
            this.name,
            number
        )
        if (!coords) {
            throw new Error('Street number does not exists.');
        }

        return coords;
    }
}


async function res() {
    // const s = new Street('santander');
    try {
        const s = await Street.init('santander');
        console.log(await s.streetNumber('5400'));
    }
    catch (error) {
        console.log(error);
    }

}

res();

