const express = require('express')
const app = express()
const metode  = require('./router/metodeRouter')
const cors = require('cors')
// const routesProduct = require('./router/productRoute')

app.use(express.json())
app.use(express.static(__dirname + '/views'));
app.use(cors())

app.get('/',(req,res)=>{
    res.render('pembayaran')
})
app.get('/product',(req,res)=>{
    res.render('product')
})
//router
// app.use('/api/stock', routes);
app.use('/api/metodeBayar', metode);
// app.use('/api/penjualan', routes);
// app.use('/api/productCat', routes);
// app.use('/api/product', routesProduct);
// app.use('/api/subProduk', routes);

module.exports = app;