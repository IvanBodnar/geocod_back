const executeQuery = require('../db/perform-query');


const getStreets = async () => {
    const query = `
        SELECT DISTINCT nombre AS result
        FROM calles_geocod
        ORDER BY nombre
    `;
    return await executeQuery(query);
};

module.exports = getStreets;
