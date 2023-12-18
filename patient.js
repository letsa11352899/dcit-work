const express = require('express')
const mongoose =require('mongoose')
const app= express();

patient.use(express.json())

mongoose.connect('mongodb+srv://pkay28748:mzTdW5k1tRDkKjPo@cluster0.how1jwt.mongodb.net/

).then(()=>{
    console.log('mongodb has connected');

});

patient.all('/test/',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});




const ProductsRoute= require('./Routes/Products.route')

patient.use('/products', ProductsRoute)





patient.listen(3000, ()=> {
    console.log('the server is running at port 3000')
})


