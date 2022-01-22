let objetoPersona1 = {
    id:'0107199300220' ,
    nombre:'Kevin Ivan',
    ciudad:'SPS'
}

let objetoPersona2 = {
    id:'0101198532528' ,
    nombre:'Pedro',
    ciudad:'Cortes'
}

let arrayNumeros = [1,25,34,56]
let arrayPersonas = [
   {
       id:'11417',nombre:'Juan',ciudad:'Tegucigalpa'
   },
   objetoPersona1
]

arrayPersonas.push(objetoPersona2)
arrayPersonas.push(50)

let resultadoFiltro = arrayPersonas.find( persona => persona.ciudad === 'SPS' )

console.log(resultadoFiltro)
// console.log(arrayPersonas)