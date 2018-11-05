const getStreets = require('../geocod/streets');
const streetFactory = require('../geocod/street_model');
const getIntersection = require('../geocod/intersection');


const streets = (req, res, next) => {
    const streets = getStreets();
    streets
        .then(streets => res.send(streets))
        .catch(error => res.status(404).send({ error: error.message }));
};

const street = (req, res, next) => {
    const street = streetFactory(req.params.name);
    street
        .then(street => res.send(street))
        .catch(error => res.status(404).send({ error: error.message }));
};

const intersection = async (req, res, next) => {
    try {
        const street1 = await streetFactory(req.query.street1);
        const street2 = await streetFactory(req.query.street2);
        const intersection = await getIntersection(street1.name, street2.name);
        res.send({ intersection: intersection });
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
};

module.exports = {
    streets: streets,
    street: street,
    intersection: intersection
};
