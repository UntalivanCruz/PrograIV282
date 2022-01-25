const fs = require('fs')
var vehiculos = JSON.parse( fs.readFileSync('data.json') )

//console.log(process.argv)
const accion = process.argv.slice(2,7)
console.log(accion)
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

var obtenerIndice=(item)=>vehiculos.findIndex((vehiculo)=>vehiculo.marca===item)

function modificarVehiculos(itemABuscar,itemNuevo){
    indice = obtenerIndice(itemABuscar)
    vehiculos[indice] = itemNuevo
}

function eliminarVehiculo(itemAEliminar){
    indice = obtenerIndice(itemAEliminar)
    vehiculos.splice(indice,1)
}

switch(accion){
    case 'insertar':
        agregarVehiculos(datos);
        break;
}

/*
agregarVehiculos({'marca':'Prueba1','color':'verde','year':2000})
modificarVehiculos('Jeep', {'marca':'Prueba2','color':'azul','year':2004})
eliminarVehiculo('Toyota')
//SALVAR ARCHIVO
console.log(vehiculos)
fs.writeFileSync('data.json',JSON.stringify(vehiculos))
*/