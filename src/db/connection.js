const Sequelize = require('sequelize');

// TODO use env variables
const sequelize = new Sequelize(
    'geocoder_rest',
    'postgres',
    'postgres',
    {
        host: 'db',
        port: '5432',
        dialect: 'postgres'
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = sequelize;
