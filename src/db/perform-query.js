const sequelize = require('./connection');


const executeQuery = async (query, ...args) => {
    const s = await sequelize.query(query, {
        replacements: args,
        type: sequelize.QueryTypes.SELECT
    });
    const result = s.map(element => element.result);

    return result.length === 1 ? result[0] : result;
};

module.exports = executeQuery;
