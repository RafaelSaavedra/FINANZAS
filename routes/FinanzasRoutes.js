const express = require ('express');
const router = express.Router();


const Ingresos = require('../controllers/controlIngresos')
const Egresos = require('../controllers/controlEgresos')


router.get('/finanzas', (req, res) => {
    res.status (200).send ('Hola mundo, bienvenido a Finanzas')
})

router.get('/finanzas/calculo',Ingresos.update)

/////////////////////////////////////////
//////Rutas Ingresos

router.get('/Ingresos', Ingresos.list)
router.post('/Ingresos', Ingresos.create)
router.get('/Ingresos/:id', Ingresos.get)
router.put('/Ingresos/:id', Ingresos.update)
router.patch('/Ingresos/:id', Ingresos.update)
router.delete('/Ingresos/:id', Ingresos.delete)



/////////////////////////////////////////
//////Rutas Egresos

router.get('/Egresos', Egresos.list)
router.post('/Egresos', Egresos.create)
router.get('/Egresos/:id', Egresos.get)
router.put('/Egresos/:id', Egresos.update)
router.patch('/Egresos/:id', Egresos.update)
router.delete('/Egresos/:id', Egresos.delete)

router.get('*', (req, res) => {
    res.status(404).send(' Esta página no existe')
})

module.exports = router ;