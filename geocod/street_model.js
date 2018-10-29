const sequelize = require('../db/connection');
const executeQuery = require('../db/queries');


class Street {
    constructor(name) {
        this.name = name;
    }

    static async init(name) {
        const exists = await executeQuery(`SELECT existe_calle(?)`, name);
        if (exists) {
            return new Street(name);
        }
        throw new Error('Street does not exists.');
    }

    async streetNumber(number) {
        const coords = await executeQuery(
            'select st_astext(altura_direccion_calle(?, ?))',
            this.name,
            number
        )
        return coords;
    }
}


async function res() {
    // const s = new Street('santander');
    try {
        const s = await Street.init('santander');
        console.log(await s.streetNumber('5400'));
    }
    catch(error) {
        console.log(error);
    }
    
}

res();

