//const Egresos = require ('../models/egresos');



//module.exports = {
    const Egresos = {

    get : (req, res) => {
        res.status (200).send ('Este es un egreso')
    },
    list: (req, res) => {
        res.status(200).send('Hola egreso')
    },
    create: (req, res) => {
        res.status(201).send('Creando un egreso')
    },
    update: (req, res) => {
        res.status(204).send('Actualizando un egreso')
    },
    delete: (req, res) => {
        res.status(204).send('Eliminando un egreso')
    }
}

module.exports = Egresos
