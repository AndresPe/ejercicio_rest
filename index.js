const express = require('express')
const app = express()

app.use("/saludo", (req, res, next) =>{
    console.log("hola desde la raiz");
     next()
})


const port = 3100

app.listen(port, () =>{
    console.log("el servidor se ejecuta desde el puerto: "+port);
})