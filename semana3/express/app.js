const express = require('express')
const app = express()

let objVehiculos=[{"marca":"BMW","color":"verde","year":2010},{"marca":"Prueba2","color":"azul","year":2004},{"marca":"Chevrolet","color":"rojo","year":2019},{"marca":"Nissan","color":"azul","year":2011},{"marca":"Chevy","color":"verde","year":2006},{"marca":"Prueba1","color":"verde","year":2000}]

app.get('/', function (req, res) {
  //res.send('Hola mundo!')
  res.json({'data':'Test'})
})

app.get('/vehiculos/:id',(req,res)=>{
    console.log(req.params.id, req.query.marca)
    res.json(objVehiculos)
})

app.post('/vehiculos',(req,res)=>{
    console.log(req
        
        )
    res.send('ok')
})

app.listen(3000)