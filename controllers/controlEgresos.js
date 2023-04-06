

const Egresos = require ('../models/egresos');

module.exports = {


    get : (req, res) => {
        //Aqui puedes ejecutar otras cosas
        Egresos.find()
        .then((result) => {
            //res.send('Hola desde el controlador! Todo salió bien :)')
            res.json(result)
        })
        .catch((err) => {
            res.send('Hola desde el controlador, todo salió mal...:(')
        })
        //res.status (200).send ('Este es un egreso')
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

