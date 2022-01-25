const fs = require('fs')
var vehiculos = JSON.parse( fs.readFileSync('data.json') )
//console.log(vehiculos)

//Recorrer un arreglo de la forma tradicional
/*for(let i=0;i<5;i++){
    console.log(`Vehiculo numero ${i+1}:${vehiculos[i].marca}`)
}*/

//Recorrear arreglo usando la funcion foreach de tipo flecha
function consultarVehiculo(){
    vehiculos.forEach( item => console.log(item) );
}
//Agregar datos al arreglo

function agregarVehiculos(item){
    vehiculos.push(
        //{'marca':'Kia','color':'gris','year':2022}
        item
        )
}

function modificarVehiculos(itemABuscar,itemNuevo){
    indice = vehiculos.findIndex((item)=>item.marca===itemABuscar.marca)
    vehiculos[indice] = itemNuevo
}

function eliminarVehiculo(indice){

}

modificarVehiculos({'marca':'Jeep'}, {'marca':'Prueba','color':'azul','year':2004})

//SALVAR ARCHIVO
console.log(vehiculos)
//fs.writeFileSync('data.json',JSON.stringify(vehiculos))