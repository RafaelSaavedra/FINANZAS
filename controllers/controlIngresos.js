const Ingresos = require ('../models/ingresos');

module.exports = {

    get : (req, res) => {
        //console.log(req.params);
        //res.status (200).send (req.params)
    //res.render('entradas/formatoIngresos', {message: 'Message1 Hello World !!! 🌎'})
        const regIngresos = 
        {
            fecha : '25 febrero 23',
            cliente: 'Nutrisa',
            producto: 'Chispas yogurt',
            cantidad: 3500,
            precio: 66,
            total: 250000,
            cobrado: false
        }
    
        res.render('entradas/registroIngresos', { regIngresos })
        //res.status (200).send ('<h1>Este es un ingreso</h1>')
        
    },
    list: (req, res) => {
        res.render('entradas/registroIngresos', {titulo: 'Hello World !!! 🌎'})
        //res.status(200).send('Hola ingreso')
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
        
        // Ingreso.save() devuelve una promesa
        savedIngreso = Ingreso.save()
        
        savedIngreso
            // Respondo exitosamente
           // .then((Ingreso) => {     
           //     res.render(`ingreso/:id`, nuevoIngreso);
           .then((savedIngreso) => {
            res.render(`entradas/registroIngresos`,savedIngreso)
              // res.redirect(`entradas/registroIngresos`, nuevoIngreso);
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


