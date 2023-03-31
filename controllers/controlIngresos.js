const Ingresos = require ('../models/ingresos');
const ejs = require('ejs');


module.exports = {
//const Ingresos = {
    get : (req, res) => {
        //console.log(req.params);
        //res.status (200).send (req.params)
        res.render('entradas/formatoIngresos', {message: 'Message1 Hello World !!! 🌎'})
        //res.render('entradas/registroIngresos', {message: 'Message2 Hello World !!! 🌎'})
        //res.status (200).send ('<h1>Este es un ingreso</h1>')
        
    },
    list: (req, res) => {
        //res.render('ingresos', {message: 'Hello World !!! 🌎'})
        res.status(200).send('Hola ingreso')
    },
    create: (req, res) => {
        //res.render('entradas/registroIngresos')

        console.log(req.body);
        const newIngreso = {
            fecha : req.body.fecha,
            cliente: req.body.cliente,
            producto: req.body.producto,
            cantidad: Number(req.body.cantidad),
            precio: Numbre(req.body.precio),
            total: Number(req.body.total),
            cobrado: req.body.cobrado
        
        }
        
        const Ingreso = new Ingreso(newIngreso)
        
        // pet.save() devuelve una promesa
        savedIngreso = Ingreso.save()
        
        savedIngreso
            // Respondo exitosamente
           // .then((Ingreso) => {     
           //     res.render(`ingreso/:id`, myPet);
           .then((savedIngreso) => {
            res.render(`Ingresos/:id`,savedIngreso)
              // res.redirect(`pets/show`, myPet);
            })
            // Respondo si hay error
            .catch((error) => {
                res.status(400).send("Hubo un error");
            })
    },
    
       //res.status(201).send('Creando un ingreso')
    //},
    update: (req, res) => {
        console.log(req.params);
        res.status(200).send('Actualizando un ingreso')
    },
    delete: (req, res) => {
        res.status(200).send('Eliminando un ingreso')
    }
}

//module.exports = Ingresos

/*
const registroIngresos = {
    fecha : '25 febrero 23',
    cliente: 'Nutrisa',
    producto: 'Chispas yogurt',
    cantidad: 3500,
    precio: 66,
    total: 250000,
    cobrado: false
}*/