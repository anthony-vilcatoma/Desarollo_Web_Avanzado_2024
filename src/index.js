import morgan from 'morgan'
import express from 'express'

const app = express();
const port = 3000
//Importamos las rutas
const routes = require('./routes')

//Middlewares
app.use(morgan('dev'));
app.use(routes)

app.listen(port,()=>{
    console.log("Ejecutando el proyecto")
})