onst mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const IngresosSchema = Schema ({
    fecha : String,
    proveedor: String,
    producto: String,
    cantidad: Number,
    precio: Number,
    total: Number,
    cobrado: Boolean
});

const Ingresos = mongoose.model('Ingresos', IngresosSchema);

module.exports = Ingresos;
