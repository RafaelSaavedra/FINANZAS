const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const EgresosSchema = Schema ({
    fecha : String,
    proveedor: String,
    producto: String,
    cantidad: Number,
    precio: Number,
    total: Number,
    pagado: Boolean
});

const Egresos = mongoose.model('Egresos', EgresosSchema);

module.exports = Egresos;


