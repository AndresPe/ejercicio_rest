const express = require('express')
const app = express()

app.use( (request, response, next) => { //middleware
    console.log('Paso por acá')
    next()
 })

 const operacionesRoutes = require("./routes/operaciones.js") //conexion con la calse operaciones para usar las rutas de las tareas
 app.use(operacionesRoutes)

 app.use('/', (request, response) => { //alerta en caso de no encontrar la ruta indicada por el usuario
    response.status(404).send("<h1>Not found</h1>")
 })

const port = 3100 // puerto donde se ejecutará el server

app.listen(port, () =>{ //levantamiento del server
    console.log("el servidor se ejecuta desde el puerto: "+port);
})