const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'geocoder_rest',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        port: '5433',
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

sequelize.query(`SELECT existe_calle('santander');`)
    .then(result => console.log(result));