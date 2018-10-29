const sequelize = require('../db/connection');
const executeQuery = require('../db/queries');


class Street {
    constructor(name) {
        this.name = name;
    }

    static async init(name) {
        const exists = await executeQuery(`SELECT existe_calle(?)`, name);
        if (exists) {
            return new Street(this.name);
        }
        throw new Error('Street does not exists.');
    }
}


async function res() {
    // const s = new Street('santander');
    try {
        const s = await Street.init('santande');
        console.log(typeof s);
    }
    catch(error) {
        console.log(error);
    }
    
}

res();

