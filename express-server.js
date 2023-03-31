const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
const Ingresos = require('./controllers/controlIngresos');
const Egresos = require('./controllers/controlEgresos');
const FinanzasRoutes = require('./routes/FinanzasRoutes');
const ejs = require('ejs');

const app = express();
const PORT = 3000
//const PetsRoutes = require('./routes/PetsRoutes')

/////////////////////////////////////
/////// CONNECTING TO EXTERNAL SERVER
/////////////////////////////////////////
/*
mongoose.connect('mongodb+srv://Rafael:15Anestesiologia20@cluster0.rnudzg3.mongodb.net/finanzas?retryWrites=true&w=majority'
, (err) => {
    if( err) return console.log('Error al conectar a mongo...');
    return console.log('Conexión a Mongo exitosa !'); 
})
*/
////////////////////////////////
///// MIDDLEWARES
//////////////////////////////

app.use(morgan('dev'));
app.set('view engine', 'ejs')

////////////////////////////////
///// ROUTES
//////////////////////////////
app.get('/', (req, res) => {
    ///// req  client request data
    ////  res response object goes to the client
    res.status (200).send ('Hola Señores')
})

//const FinanzasRoutes = require('./routes/FinanzasRoutes')
app.use( FinanzasRoutes);

//app.use(require('./routes/FinanzasRoutes'));


/*
app.get('/finanzas/calculo',Ingresos.update)

app.get('/', Ingresos.list)
app.post('/', Ingresos.create)
app.get('/:id', Ingresos.get)
app.put('/:id', Ingresos.update)
app.patch('/:id', Ingresos.update)
app.delete('/:id', Ingresos.delete)

app.get('*', (req, res) => {
    res.status(404).send(' Esta página no existe')
})
*/

////////////////////////////////
///// SERVER LISTENING
//////////////////////////////
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
