const executeQuery = require('../db/perform-query');


const getIntersection = async (street1, street2) => {
    try {
        const query = `
            SELECT st_astext(punto_interseccion(?, ?)) AS result;
        `;
        const result = await executeQuery(query, street1, street2);
        if (!result) {
            throw new Error('intersection does not exists');
        }

        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = getIntersection;
