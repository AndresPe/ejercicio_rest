const express = require('express')
const router = express.Router()

//metodo de suma
router.get("/suma/:num1/:num2", (req, res) =>{
    let numero1 = parseInt(req.params.num1)
    let numero2 = parseInt(req.params.num2)
    let suma = numero1+numero2
    json.suma = suma //enviar la suma al archivo json
    console.log(json);
    res.send("<br/> <h3>"+numero1+" + "+numero2+" = "+json.suma+"</h3>") //mostar al usuario el resultado de una forma más amable con un html
})
//metodo multiplicacion
router.get("/multiplicacion/:num1/:num2", (req,res)=>{
    let numero1 = parseInt(req.params.num1)
    let numero2 = parseInt(req.params.num2)
    json.multiplicacion = numero1*numero2
    console.log(json);
    res.send("<br/> <h3>"+numero1+" * "+numero2+" = "+json.multiplicacion+"</h3>")
})
//metodo division
router.get("/division/:num1/:num2", (req, res)=>{
    let numero1 = parseInt(req.params.num1)
    let numero2 = parseInt(req.params.num2)
    json.division = numero1/numero2
    console.log(json);
    res.send("<br/> <h3>"+numero1+" / "+numero2+" = "+json.division+"</h3>")
})
//metodo resta
router.get("/resta/:num1/:num2", (req,res)=>{
    let numero1 = parseInt(req.params.num1)
    let numero2 = parseInt(req.params.num2)
    json.resta = numero1-numero2
    console.log(json);
    res.send("<br/> <h3>"+numero1+" - "+numero2+" = "+json.resta+"</h3>")    
})

module.exports = router //exportar el archivo para poder usar sus metodos