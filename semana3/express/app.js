//Importando paquetes externos
const express = require('express') //Un HTTP simplificado
const cors = require('cors') //Header de HTTP para transferir recursos entre cliente-servidor
const fs = require('fs')
//Inicializar una app con express
const app = express()
//USE configurar mi app para que se seteen los CORS para HTTP
app.use(cors())
//Parseo JSON
app.use(express.json())
//Servir una aplicacion cliente
app.use(express.static('public'))

//let objVehiculos = [{ "marca": "BMW", "color": "verde", "year": 2010 }, { "marca": "Prueba2", "color": "azul", "year": 2004 }, { "marca": "Chevrolet", "color": "rojo", "year": 2019 }, { "marca": "Nissan", "color": "azul", "year": 2011 }, { "marca": "Chevy", "color": "verde", "year": 2006 }, { "marca": "Prueba1", "color": "verde", "year": 2000 }]
let data = JSON.parse ( fs.readFileSync('data.json'))

function guardar(){
    fs.writeFileSync('data.json',JSON.stringify(data))
}

//OBTENER DATOS
app.get('/vehiculos', function (req, res) {
    res.json(data)
})

//FILTROS
app.get('/vehiculos/:id', (req, res) => {
    console.log(req.params.id, req.query.marca)
    res.json(objVehiculos)
})
//INSERTAR DATOS
app.post('/vehiculos', (req, res) => {
    data.push(req.body)
    guardar()
    res.json(
        {
            "mensaje":"Datos ingresados con exito"
        }
        )
})

app.put('/vehiculos',(req,resp)=>{

})

app.delete('/vehiculos',(req,resp)=>{

})

app.listen(3000, () => console.log('Aplicacion corriendo en puerto 3000'))