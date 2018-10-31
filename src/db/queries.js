const sequelize = require('./connection');

const executeQuery = async (query, ...args) => {
    const s = await sequelize.query(query + ' AS resultado;', {
        replacements: args,
        type: sequelize.QueryTypes.SELECT
    });
    return s[0].resultado;
};

module.exports = executeQuery;
