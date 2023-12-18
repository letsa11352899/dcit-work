const express= require('express')

const Router = express.Router();





Router.get('/' ,(req, res)=>{
res.send('we have created the router file and invoked the router function');
});

Router.post('/',(req,res)=>{
    console.log(req.body);
    const patient = new Patient({
        name:req.body.name,
        price:req.body.price

    })

    patient.save()
    .then(results=>{
        console.log(results)

    })
    
})    


Router.delete('/',(req,res)=>{
    res.send('updating all available products');
});


module.exports= Router;
