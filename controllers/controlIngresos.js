const Ingresos = {
    get : (req, res) => {
        res.status (200).send ('Este es un ingreso')
    },
    list: (req, res) => {
        res.status(200).send('Hola ingreso')
    },
    create: (req, res) => {
        res.status(201).send('Creando un ingreso')
    },
    update: (req, res) => {
        res.status(200).send('Actualizando un ingreso')
    },
    delete: (req, res) => {
        res.status(200).send('Eliminando un ingreso')
    }
}

module.exports = Ingresos