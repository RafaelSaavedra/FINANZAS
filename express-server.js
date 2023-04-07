const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');

const FinanzasRoutes = require('./routes/FinanzasRoutes');
//const ejs = require('ejs');

const app = express();
const PORT = 3000

app.set('view engine', 'ejs');

/////////////////////////////////////
/////// CONNECTING TO EXTERNAL SERVER
/////////////////////////////////////////

mongoose.connect('mongodb+srv://Rafael:15Anestesiologia20@cluster0.rnudzg3.mongodb.net/finanzas?retryWrites=true&w=majority')
/*, (err) => {
    if( err) return console.log('Error al conectar a mongo...');
    return console.log('Conexión a Mongo exitosa !'); 
})
*/
////////////////////////////////
///// MIDDLEWARES
//////////////////////////////

app.use(morgan('dev'));

////////////////////////////////
///// ROUTES
//////////////////////////////
app.get('/', (req, res) => {
    ///// req  client request data
    ////  res response object goes to the client
    res.status (200).send ('Hola Señores')
})

app.use( FinanzasRoutes);

////////////////////////////////
///// SERVER LISTENING
//////////////////////////////
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
